import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDTO } from './dto/create_user.dto';
import { firstValueFrom } from 'rxjs';
@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query()
    getUsers(): Promise<UserDto> {
        return firstValueFrom(this.usersService.getUsers());
    }

    @Mutation()
    async signUp(
    @Args('data') data: CreateUserDTO,
  ): Promise<UserDto> {
    return firstValueFrom(this.usersService.signUp(data));
  }
}
