import { Injectable } from '@nestjs/common';
import { UserDto } from '../../../libs/contracts/src/users/user.dto';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User,) {}

  findAll(): Promise<User[]>  {
    return this.userModel.findAll();
  }
}
