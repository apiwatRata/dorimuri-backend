import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
