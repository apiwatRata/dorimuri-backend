import { Injectable } from '@nestjs/common';

@Injectable()
export class DorimuriApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
