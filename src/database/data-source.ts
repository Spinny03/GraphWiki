import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {User} from './entity/User';
import {Article} from './entity/Article';

export const AppDataSource = new DataSource({
    useUnifiedTopology: true,
    type: 'mongodb',
    database: 'database',
    synchronize: true,
    logging: false,
    entities: [User, Article],
    migrations: [],
    subscribers: [],
});
