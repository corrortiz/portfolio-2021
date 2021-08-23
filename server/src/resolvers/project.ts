import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Project, ProjectInput } from '../entities/Project'
import { MyContext } from '../types'

@Resolver()
export class ProjectResolver {
  @Query(() => [Project])
  projects (@Ctx() { em }: MyContext): Promise<Project[]> {
    return em.find(Project, {})
  }

  @Query(() => Project, { nullable: true })
  project (@Arg('id') id: number, @Ctx() { em }: MyContext): Promise<Project | null> {
    return em.findOne(Project, { id })
  }

  @Mutation(() => Project)
  async createProject (
    @Arg('payload') payload: ProjectInput,
    @Ctx() { em }: MyContext
  ): Promise<Project> {
    const newProject = em.create(Project, { ...payload })
    await em.persistAndFlush(newProject)
    return newProject
  }

  @Mutation(() => Project, { nullable: true })
  async updateProject (
    @Arg('id') id: number,
    @Arg('payload') payload: ProjectInput,
    @Ctx() { em }: MyContext
  ): Promise<Project | null> {
    let projectToUpdate = await em.findOne(Project, { id })
    if (!projectToUpdate) {
      return null
    }
    projectToUpdate = {...projectToUpdate, ...payload}
    await em.persistAndFlush(projectToUpdate)
    return projectToUpdate
  }

  @Mutation(() => Boolean)
  async deleteProject (
    @Arg('id') id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(Project, { id })
    return true
  }
}
