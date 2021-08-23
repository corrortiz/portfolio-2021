import path from 'path'
import { MikroORM } from '@mikro-orm/core'
import { Project } from './entities/Project'
import { User } from './entities/User'

export default {
  entities: [Project, User],
  dbName: 'portfolio2021',
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
