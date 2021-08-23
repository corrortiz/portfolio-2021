import path from 'path'
import { MikroORM } from '@mikro-orm/core'
import { Post } from './entities/Post'
import { Patient } from './entities/Patient'
import { User } from './entities/User'

export default {
  entities: [Post, Patient, User],
  dbName: 'server-cc',
  user: 'admin',
  password: 'admin',
  type: 'postgresql',
  debug: true,
  port: 15432,
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  }
} as Parameters<typeof MikroORM.init>[0]
