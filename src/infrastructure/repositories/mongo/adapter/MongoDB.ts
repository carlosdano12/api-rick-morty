import { DB_NAME, MONGO_URL } from '@util';
import { MongoClient } from 'mongodb';

const mongo = new MongoClient(MONGO_URL);
mongo.connect();
export const mongodb = mongo.db(DB_NAME);
