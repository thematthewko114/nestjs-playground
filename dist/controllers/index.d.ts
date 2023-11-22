import { AppService } from '../services';
import { TestResponse } from '../models';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): TestResponse;
}
