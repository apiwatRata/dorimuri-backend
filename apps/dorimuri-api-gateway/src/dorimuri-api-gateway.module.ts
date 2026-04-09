import { Module } from '@nestjs/common';
import { DorimuriApiGatewayController } from './dorimuri-api-gateway.controller';
import { DorimuriApiGatewayService } from './dorimuri-api-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [DorimuriApiGatewayController],
  providers: [DorimuriApiGatewayService],
})
export class DorimuriApiGatewayModule {}
