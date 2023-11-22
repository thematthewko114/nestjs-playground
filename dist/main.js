"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const modules_1 = require("./modules");
async function bootstrap() {
    const app = await core_1.NestFactory.create(modules_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map