import { UserCreateResponse, UserDTO, ErrorResponse } from 'src/models/users';
import { UserService } from 'src/services/users';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(newUser: UserDTO): Promise<UserCreateResponse | ErrorResponse>;
}
