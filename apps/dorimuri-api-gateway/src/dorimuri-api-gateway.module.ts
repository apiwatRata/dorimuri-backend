import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DorimuriApiGatewayController } from './dorimuri-api-gateway.controller';
import { DorimuriApiGatewayService } from './dorimuri-api-gateway.service';
import { UsersModule } from './users/users.module';
import { join } from 'path';
@Module({
  imports: [UsersModule,
     GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          typePaths: ['./**/*.graphql'],
          definitions: {
            path: join(process.cwd(), 'apps/dorimuri-api-gateway/src/graphql.ts'),
            outputAs: 'class',
          },
          path: '/luckyclover'
        }),
  ],
  controllers: [DorimuriApiGatewayController],
  providers: [DorimuriApiGatewayService],
})
export class DorimuriApiGatewayModule {}
