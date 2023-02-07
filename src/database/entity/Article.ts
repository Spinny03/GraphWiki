import {Field, ID, ObjectType} from 'type-graphql';
import {Entity, BaseEntity, Column, ObjectIdColumn, ObjectID,
    ManyToOne} from 'typeorm';
import {User} from './User';


@ObjectType()
@Entity()
/**
 * @class Article
 * @extends BaseEntity
 * @property {ObjectID} id - The id of the article
 * @property {string} title - The title of the article
 * @property {string} date - The date of the article
 * @property {string} text - The text of the article
 */
export class Article extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
        id!: ObjectID;

    @Field(() => String)
    @Column()
        title: string;

    @Field(() => String)
    @Column()
        date: string;

    @Field(() => String)
    @Column()
        text: string;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.articles)
        user: User;
}
