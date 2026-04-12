import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { CreateUserDTO } from './dto/create_user.dto';
@Injectable()
export class UsersService {
    constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}

    getUsers() {
       return this.usersClient.send<UserDto>('users.findAll', {});
    }

    signUp(data: CreateUserDTO){
        return this.usersClient.send<UserDto>('users.SignUp', {data})
    }
}
