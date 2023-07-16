import mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    first_name?: string;
    last_name?: string;
    email?: string;
    passwordHash?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    first_name?: string;
    last_name?: string;
    email?: string;
    passwordHash?: string;
}>> & Omit<mongoose.FlatRecord<{
    first_name?: string;
    last_name?: string;
    email?: string;
    passwordHash?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface User extends mongoose.Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    passwordHash: string;
}
