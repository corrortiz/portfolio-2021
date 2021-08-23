import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, Int, ObjectType } from 'type-graphql'

export enum PatientSex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NO_BINARY = 'NO_BINARY',
}

@ObjectType()
@Entity()
export class Patient {
  @Field()
  @PrimaryKey()
  id: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field(() => String)
  @Property({ type: 'text' })
  user!: string;

  @Field(() => String)
  @Property({ type: 'text' })
  name!: string;

  @Field(() => String)
  @Property({ type: 'text' })
  lastName!: string;

  @Enum(() => PatientSex)
  @Property()
  sex!: PatientSex;

  @Field(() => String)
  @Property({ type: 'date' })
  birthDay!: Date;

  @Field(() => Int)
  @Property()
  age!: number;

  @Field(() => String)
  @Property()
  phone!: string;

  @Field(() => String)
  @Property()
  email!: string;
}
