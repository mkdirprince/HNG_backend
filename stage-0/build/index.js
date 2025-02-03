"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./utils/config"));
const app_1 = __importDefault(require("./app"));
const PORT = config_1.default.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
