import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, ClientKafka } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { CreateUserDTO } from './dto/create_user.dto';
@Injectable()
export class UsersService {
    constructor(@Inject('USERS_SERVICE') private usersClient: ClientKafka) {}

    async onModuleInit() {
        const topics = [
            'users.findAll',
            'users.SignUp',
        ];
        topics.forEach(t => this.usersClient.subscribeToResponseOf(t));
        await this.usersClient.connect();
    }

    getUsers() {
       return this.usersClient.send<UserDto>('users.findAll', {message:'test'});
    }

    signUp(data: CreateUserDTO){
        return this.usersClient.send<UserDto>('users.SignUp', {data})
    }
}
