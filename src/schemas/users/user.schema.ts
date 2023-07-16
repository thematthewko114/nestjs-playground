import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    passwordHash: String
})

export interface User extends mongoose.Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    passwordHash: string;
}