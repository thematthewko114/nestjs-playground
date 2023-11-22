import { Connection } from 'mongoose';
import { UserSchema } from 'src/schemas/users/user.schema';

const mongodbUri = process.env.MONGODB_URI;

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];