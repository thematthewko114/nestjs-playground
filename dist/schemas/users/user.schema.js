"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.default.Schema({
    first_name: String,
    last_name: String,
    email: String,
    passwordHash: String
});
//# sourceMappingURL=user.schema.js.map