"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const PORT = Number(process.env.PORT);
console.log(PORT);
exports.default = {
    PORT,
};
