import {Field, ID, ObjectType} from 'type-graphql';
import {Entity, BaseEntity, Column, ObjectIdColumn,
    ObjectID, OneToMany} from 'typeorm';
import {Article} from './Article';


@ObjectType()
@Entity()
/**
 * User entity
 * @class
 * @extends BaseEntity
 * @property {ObjectID} _id - User id
 * @property {string} username - User username
 * @property {string} name - User name
 * @property {string} surname - User surname
 */
export class User extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
        id!: ObjectID;

    @Field(() => String)
    @Column()
        username!: string;

    @Field(() => String)
    @Column()
        name: string;

    @Field(() => String)
    @Column()
        surname: string;

    @Field(() => [Article])
    @OneToMany(() => Article, (article) => article.user)
        articles: Article[];
}
