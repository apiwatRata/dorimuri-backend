import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query()
    getUsers() {
        return this.usersService.getUsers();
    }
}
