import {Resolver, Query, Arg, ID} from 'type-graphql';
import {User} from '../database/entity/User';
import {Equal, ObjectID} from 'typeorm';

@Resolver()
/**
 * Resolver per la gestione degli utenti
 * @class UserResolver
 */
export class UserResolver {
    @Query(() => [User])
    /**
     * Ritorna tutti gli utenti
     * @function users
     * @returns {Promise<User[]>} - Utenti
     */
    async users(): Promise<User[]> {
        return await User.find();
    }

    @Query(() => User)
    /**
     * Ritorna un utente
     * @param {ObjectID} _id - ID dell'utente
     * @returns {Promise<User>} - Utente
     */
    async user(@Arg('_id', () => ID) _id: ObjectID): Promise<User> {
        // capire perchè non funziona non trova nulla
        return await User.findOne({where: {_id: Equal(_id)}});
    }
}
