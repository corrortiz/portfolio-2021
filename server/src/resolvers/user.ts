import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import argon2 from 'argon2'
import { User, UserInput } from '../entities/User'
import { MyContext } from '../types'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users (@Ctx() { em, req }: MyContext): Promise<User[]> {
    console.log(req.session.userId)

    return em.find(User, {})
  }

  @Query(() => User, { nullable: true })
  user (@Arg('id') id: number, @Ctx() { em }: MyContext): Promise<User | null> {
    return em.findOne(User, { id })
  }

  @Query(() => User, { nullable: true })
  me (@Ctx() { em, req }: MyContext) {
    if (!req.session.userId) {
      return null
    }
    return em.findOne(User, { id: req.session.userId })
  }

  @Query(() => Boolean)
  logout (@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) => {
      res.clearCookie('qid')
      req.session.destroy(err => {
        if (err) {
          console.log(err)
          return resolve(false)
        }

        return resolve(true)
      })
    })
  }

  @Query(() => User)
  async login (
    @Arg('payload') payload: UserInput,
    @Ctx() { em, req }: MyContext
  ): Promise<User | null> {
    try {
      const user = await em.findOne(User, { userName: payload.userName })

      if (user) {
        const isValid = await argon2.verify(user?.password, payload.password)
        if (isValid) {
          req.session.userId = user.id
          return user
        }
      }
      req.session.userId = 0
      return null
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Mutation(() => User)
  async creatUser (
    @Arg('payload') payload: UserInput,
    @Ctx() { em, req }: MyContext
  ): Promise<User> {
    try {
      const hashedPassword = await argon2.hash(payload.password)
      const newUser = em.create(User, {
        userName: payload.userName,
        password: hashedPassword
      })
      req.session.userId = newUser.id
      await em.persistAndFlush(newUser)
      return newUser
    } catch (error) {
      throw new Error(error.message)
    }
  }

  // @Mutation(() => User, { nullable: true })
  // async updatePost(
  //   @Arg('id') id: number,
  //   @Arg('title') title: string,
  //   @Ctx() { em }: MyContext,
  // ): Promise<User | null> {
  //   const postToUpdate = await em.findOne(User, { id });
  //   if (!postToUpdate) {
  //     return null;
  //   }
  //   postToUpdate.title = title;
  //   await em.persistAndFlush(postToUpdate);
  //   return postToUpdate;
  // }

  // @Mutation(() => Boolean)
  // async deletePost(
  //   @Arg('id') id: number,
  //   @Ctx() { em }: MyContext,
  // ): Promise<boolean> {
  //   await em.nativeDelete(User, { id });
  //   return true;
  // }
}
