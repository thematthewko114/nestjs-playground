import { AppService } from '../services';
import { TestResponse } from '../models/coin-ranking';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): TestResponse;
}
