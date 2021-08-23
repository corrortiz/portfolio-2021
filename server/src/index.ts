import 'reflect-metadata'
import { MikroORM } from '@mikro-orm/core'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import redis from 'redis'
import session from 'express-session'
import connectRedis from 'connect-redis'
import cors from 'cors'

import dbConfig from './mikro-orm.config'
import { buildSchema } from 'type-graphql'
import { ProjectResolver } from './resolvers/project'
import { UserResolver } from './resolvers/user'

const main = async () => {
  const orm = await MikroORM.init(dbConfig)
  await orm.getMigrator().up()

  const app = express()

  app.use(
    cors({
      origin: '*',
      credentials: true
    })
  )

  const RedisStore = connectRedis(session)
  const redisClient = redis.createClient()

  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', // CSRF
        secure: false // cookie only works in https
      },
      saveUninitialized: false,
      secret: 'thisIsASecret',
      resave: false
    })
  )

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProjectResolver, UserResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res })
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, cors: false })

  app.listen(4000, () => {
    console.log('🚀 server started on http://localhost:4000/')
  })
}

main().catch((err) => console.error(err))
