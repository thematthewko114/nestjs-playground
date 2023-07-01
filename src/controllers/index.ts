import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services';
import { TestResponse } from '../models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TestResponse {
    return this.appService.getHello();
  }
}
