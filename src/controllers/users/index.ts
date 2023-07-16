import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserCreateResponse, UserDTO, ErrorResponse } from 'src/models/users';
import { UserService } from 'src/services/users';


@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/create")
  createUser(@Body() newUser: UserDTO): Promise<UserCreateResponse | ErrorResponse> {
    console.log(newUser)
    return this.userService.createUser(newUser);
  }
}
