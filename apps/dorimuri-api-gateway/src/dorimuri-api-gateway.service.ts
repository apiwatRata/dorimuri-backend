import { Injectable } from '@nestjs/common';

@Injectable()
export class DorimuriApiGatewayService {
  getHello(): string {
    return 'Why Are you here?';
  }
}
