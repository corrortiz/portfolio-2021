import { Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Project {
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
  title!: string;
 
  @Field(() => String)
  @Property({ type: 'text' })
  description!: string;
  
  @Field(() => String)
  @Property({ type: 'text' })
  URL!: string;
  
  @Field(() => String)
  @Property({ type: 'text' })
  images!: string;
}

@InputType()
export class ProjectInput {
  @Field(() => String)
  title!: string;
 
  @Field(() => String)
  description!: string;
  
  @Field(() => String)
  URL!: string;
  
  @Field(() => String)
  images!: string;
}
