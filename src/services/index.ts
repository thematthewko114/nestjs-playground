import { Injectable } from '@nestjs/common';
import { TestResponse } from '../models';

@Injectable()
export class AppService {
  getHello(): TestResponse {
    let object = {
      data:{
        message: 'Hello World'
      }
    };
    return object.data;
  }
}
