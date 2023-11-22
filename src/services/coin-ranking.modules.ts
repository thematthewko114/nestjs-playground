import { Injectable } from '@nestjs/common';
import { CoinRankingCoins, CoinRankingHistory, ErrorResponse } from '../models';
import axios from 'axios';
require('dotenv').config()

const apiKey = process.env.RAPIDAPI_KEY;
const host = process.env.RAPIDAPI_HOST;
const currency_ref = process.env.RAPIDAPI_CURRENCY_REF;

@Injectable()
export class CoinRankingService {
  async getCoins(): Promise<CoinRankingCoins | ErrorResponse> {
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
            'X-RapidAPI-Host': host.replace("https://","")
        }
    };
    try {
        const response = await axios.request(options);
        const responseObj = {
          stats: response.data.data.stats,
          coins: response.data.data.coins
        }
        return responseObj;
    } 
    catch (error) {
        return {message: "Connection failed"};
    }
  }

  async getCoinHistory(id: string): Promise<CoinRankingHistory | ErrorResponse> {
    const options = {
        method: 'GET',
        url: `${host}/coin/${id}/history`,
        params: {
            referenceCurrencyUuid: currency_ref,
            timePeriod: '3m'
          },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': host.replace("https://","")
        }
    };
    try {
        const response = await axios.request(options);
        const responseObj = {
          change: response.data.data.change,
          history: response.data.data.history
        }
        return responseObj;
    } 
    catch (error) {
      return {message: "Connection failed"};
    }
  }
}
