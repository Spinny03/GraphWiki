import {Field, ID, ObjectType} from 'type-graphql';
import {Entity, BaseEntity, Column, ObjectIdColumn, ObjectID} from 'typeorm';


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
        _id!: ObjectID;

    @Field(() => String)
    @Column()
        username!: string;

    @Field(() => String)
    @Column()
        name: string;

    @Field(() => String)
    @Column()
        surname: string;
}
