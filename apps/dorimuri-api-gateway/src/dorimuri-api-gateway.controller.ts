import { Controller, Get } from '@nestjs/common';
import { DorimuriApiGatewayService } from './dorimuri-api-gateway.service';

@Controller()
export class DorimuriApiGatewayController {
  constructor(private readonly dorimuriApiGatewayService: DorimuriApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.dorimuriApiGatewayService.getHello();
  }
}
