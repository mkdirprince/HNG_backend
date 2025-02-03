"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const info_1 = __importDefault(require("./routes/info"));
const middleware_1 = __importDefault(require("./utils/middleware"));
app.use((0, cors_1.default)());
app.use("/api/info", info_1.default);
app.use(middleware_1.default.unknownEndpoint);
exports.default = app;
