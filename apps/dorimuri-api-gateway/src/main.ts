import { NestFactory } from '@nestjs/core';
import { DorimuriApiGatewayModule } from './dorimuri-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(DorimuriApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
