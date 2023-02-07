import {buildSchema} from 'type-graphql';
import {AppDataSource} from './database/data-source';
import {UserResolver} from './resolvers/UserResolever';
import {ApolloServer} from 'apollo-server';

AppDataSource.initialize().then(async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver],
    });
    const server = new ApolloServer({schema});
    await server.listen(4000);
    console.log('Server has started!');
}).catch((error) => console.log(error));
