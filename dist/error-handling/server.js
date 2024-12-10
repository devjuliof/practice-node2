"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api404Error_1 = require("./apiErrors/api404Error");
const user = null;
if (user === null) {
    throw new api404Error_1.Api404Error(`User not found`);
}
