import {buildSchema} from 'type-graphql';
import {AppDataSource} from './src/database/data-source';
import {UserResolver} from './src/resolvers/UserResolever';
import {ApolloServer} from 'apollo-server';

AppDataSource.initialize().then(async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver],
    });
    const server = new ApolloServer({schema});
    await server.listen(4000);
    console.log('Server has started!');
}).catch((error) => console.log(error));
