import { ErrorResponse } from '../../models/coin-ranking';
import { Model } from 'mongoose';
import { User } from 'src/schemas/users/user.schema';
import { UserCreateResponse, UserDTO } from 'src/models/users';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    private saltCount;
    createUser(newUserDTO: UserDTO): Promise<UserCreateResponse | ErrorResponse>;
}
