import { Migration } from '@mikro-orm/migrations';

export class Migration20210823010437 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "user_name" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_user_name_unique" unique ("user_name");');

    this.addSql('create table "project" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null, "description" text not null, "url" text not null, "images" text not null);');
  }

}
