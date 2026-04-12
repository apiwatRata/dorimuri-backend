import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
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
    ])
  ],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
