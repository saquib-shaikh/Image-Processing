"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const imagesharp_1 = __importDefault(require("../sharp/imagesharp"));
const filename = 'palmtunnel';
const height = 100;
const width = 200;
const OrigPath = `${path_1.default.resolve(__dirname, `./../../Photos/imagesOrig/${filename}.jpg`)}`;
const newPath = `${path_1.default.resolve(__dirname, `./../../Photos/resized/${filename}_${height}*${width}.jpg`)}`;
describe('image resize successfully', () => {
    it('rejects promise if something went wrong', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, imagesharp_1.default)(height, width, OrigPath, newPath)).toBeResolved();
    }));
});
