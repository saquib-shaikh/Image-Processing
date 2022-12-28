"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const sharpImage = (height, width, OrigPath, newPath) => {
    return (0, sharp_1.default)(OrigPath).resize(width, height).toFile(newPath);
};
exports.default = sharpImage;
