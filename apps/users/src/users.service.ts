import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../libs/contracts/src/users/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto [] = [ 
    { id: 1, username: 'John',birth_date: '1997-03-16' ,email: 'jd@gmail.com', sex: 1 },
    { id: 2, username: 'Jane',birth_date: '1999-05-30' , email: 'jad@gmail.com', sex: 2 },
  ]

  findAll() {
    return this.users;
  }
}
