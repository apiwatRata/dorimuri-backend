import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'users',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'users-consumer',
          }
        },
      },
    ])
  ],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
