import { NestFactory } from '@nestjs/core';
import { DorimuriApiGatewayModule } from './dorimuri-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(DorimuriApiGatewayModule);
  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN?.split(',') || ['http://localhost:4200'] ,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
