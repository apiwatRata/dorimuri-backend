import { Test, TestingModule } from '@nestjs/testing';
import { DorimuriApiGatewayController } from './dorimuri-api-gateway.controller';
import { DorimuriApiGatewayService } from './dorimuri-api-gateway.service';

describe('DorimuriApiGatewayController', () => {
  let dorimuriApiGatewayController: DorimuriApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DorimuriApiGatewayController],
      providers: [DorimuriApiGatewayService],
    }).compile();

    dorimuriApiGatewayController = app.get<DorimuriApiGatewayController>(DorimuriApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dorimuriApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
