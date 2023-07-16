import { Inject, Injectable } from '@nestjs/common';
import { ErrorResponse } from '../../models/coin-ranking';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users/user.schema';
import { UserCreateResponse, UserDTO } from 'src/models/users';
import * as bcrypt from 'bcrypt';
require('dotenv').config()

@Injectable()
export class UserService {

    constructor(
        @Inject("USER_MODEL")
        private userModel: Model<User>
    ) {}

    private saltCount = 10

    async createUser(newUserDTO: UserDTO): Promise<UserCreateResponse | ErrorResponse> {
        const salt = await bcrypt.genSalt(this.saltCount);
        const hashedPassword = await bcrypt.hash(newUserDTO.password, salt);
        const newUser = new this.userModel({...newUserDTO, passwordHash: hashedPassword });
        const res = await newUser.save();
        console.log(res)
        return { id: res._id };
    }
}
