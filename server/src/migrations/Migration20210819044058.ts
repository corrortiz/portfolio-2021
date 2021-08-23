import { Migration } from '@mikro-orm/migrations'

export class Migration20210819044058 extends Migration {
  async up (): Promise<void> {
    this.addSql('create table "patient" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "user" text not null, "name" text not null, "last_name" text not null, "sex" text check ("sex" in (\'MALE\', \'FEMALE\', \'NO_BINARY\')) not null, "birth_day" timestamptz(0) not null, "age" int4 not null, "phone" varchar(255) not null, "email" varchar(255) not null);')

    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);')
  }
}
