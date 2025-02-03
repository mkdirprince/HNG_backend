"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoRouter = (0, express_1.Router)();
infoRouter.get("/", (_req, res) => {
    const info = {
        email: "mkdirprince@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/mkdirprince/QuickInfoAPi",
    };
    res.json(info);
});
exports.default = infoRouter;
