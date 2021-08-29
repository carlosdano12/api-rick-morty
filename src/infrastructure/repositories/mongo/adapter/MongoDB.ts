import { MongoClient } from 'mongodb';

const mongo = new MongoClient(`mongodb+srv://carlos:nziHnyDQkgcVwycg@cluster0.sn4qk.mongodb.net/test`);
mongo.connect();
export const mongodb = mongo.db('my_db');
