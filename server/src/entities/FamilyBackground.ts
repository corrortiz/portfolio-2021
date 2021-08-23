import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Post {
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
  ailment!: string;

  @Field(() => String)
  @Property({ type: 'text' })
  patientRelative!: string;

  @Field(() => Boolean)
  @Property({ type: 'text' })
  isPatientRelativeDeceased!: boolean;
}
