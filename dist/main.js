"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const coin_ranking_1 = require("./modules/coin-ranking");
async function bootstrap() {
    const app = await core_1.NestFactory.create(coin_ranking_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map