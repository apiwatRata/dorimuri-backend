import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../libs/contracts/src/users/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto [] = [ 
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
  ]

  findAll() {
    return this.users;
  }
}
