"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinRankingService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
require('dotenv').config();
const apiKey = process.env.RAPIDAPI_KEY;
const host = process.env.RAPIDAPI_HOST;
const currency_ref = process.env.RAPIDAPI_CURRENCY_REF;
let CoinRankingService = exports.CoinRankingService = class CoinRankingService {
    async getCoins() {
        const options = {
            method: 'GET',
            url: `${host}/coins`,
            params: {
                referenceCurrencyUuid: currency_ref,
                timePeriod: '24h',
                'tiers[0]': '1',
                orderBy: 'marketCap',
                orderDirection: 'desc',
                limit: '50',
                offset: '0'
            },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': host.replace("https://", "")
            }
        };
        try {
            const response = await axios_1.default.request(options);
            const responseObj = {
                stats: response.data.data.stats,
                coins: response.data.data.coins
            };
            return responseObj;
        }
        catch (error) {
            return { message: "Connection failed" };
        }
    }
    async getCoinHistory(id) {
        const options = {
            method: 'GET',
            url: `${host}/coin/${id}/history`,
            params: {
                referenceCurrencyUuid: currency_ref,
                timePeriod: '3m'
            },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': host.replace("https://", "")
            }
        };
        try {
            const response = await axios_1.default.request(options);
            const responseObj = {
                change: response.data.data.change,
                history: response.data.data.history
            };
            return responseObj;
        }
        catch (error) {
            return { message: "Connection failed" };
        }
    }
};
exports.CoinRankingService = CoinRankingService = __decorate([
    (0, common_1.Injectable)()
], CoinRankingService);
//# sourceMappingURL=coin-ranking.modules.js.map