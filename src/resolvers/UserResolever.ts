import {Resolver, Query, Arg, ID} from 'type-graphql';
import {User} from '../database/entity/User';
import {ObjectID} from 'typeorm';

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
        // capire perchè non funziona con relationa
        return await User.find({
            relations: {
                articles: true,
            },
        });
    }

    @Query(() => User)
    /**
     * Ritorna un utente
     * @param {string} username - Username dell'utente
     * @returns {Promise<User>} - Utente
     */
    async user(@Arg('username', () => String) username: string): Promise<User> {
        return await User.findOneBy({username});
    }


    @Query(() => User)
    /**
     * Ritorna un utente
     * @param {string} username - Username dell'utente
     * @returns {Promise<User>} - Utente
     */
    async userId(@Arg('id', () => ID) id: ObjectID): Promise<User> {
        // capire perchè non funziona con ID
        return await User.findOneBy({id});
    }
}
