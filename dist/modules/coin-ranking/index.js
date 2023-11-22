"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("../../controllers");
const services_1 = require("../../services");
const coin_ranking_1 = require("../../controllers/coin-ranking");
const coin_ranking_2 = require("../../services/coin-ranking");
const users_1 = require("../users");
require('dotenv').config();
const mongodbUri = process.env.MONGODB_CONNECTION_STRING;
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_1.UserModule],
        controllers: [controllers_1.AppController, coin_ranking_1.CoinRankingController],
        providers: [services_1.AppService, coin_ranking_2.CoinRankingService],
    })
], AppModule);
//# sourceMappingURL=index.js.map