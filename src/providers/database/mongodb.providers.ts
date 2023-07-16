import * as mongoose from 'mongoose';
require('dotenv').config()

const mongodbUri = process.env.MONGODB_CONNECTION_STRING;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(mongodbUri),
  },
];