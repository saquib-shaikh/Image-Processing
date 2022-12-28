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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const routes = express_1.default.Router();
const path_1 = __importDefault(require("path"));
const imagesharp_1 = __importDefault(require("./../sharp/imagesharp"));
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.filename;
        const ht = Number(req.query.height);
        const wt = Number(req.query.width);
        if (!ht || !name || !wt || ht <= 0 || wt <= 0) {
            res
                .status(400)
                .send('Error pls provide correct filename, height and width for Example http://localhost:3000/images?filename=fjord&height=100&width=200');
            return;
        }
        const originalImage = `${path_1.default.resolve(__dirname, `./../../Photos/imagesOrig/${name}.jpg`)}`;
        const newPath = `${path_1.default.resolve(__dirname, `./../../Photos/resized/${name}_${ht}*${wt}.jpg`)}`;
        if (fs_1.default.existsSync(newPath)) {
            res.sendFile(newPath);
        }
        else {
            yield (0, imagesharp_1.default)(ht, wt, originalImage, newPath);
            res.sendFile(newPath);
        }
    }
    catch (error) {
        res
            .status(500)
            .send('Error occured while fetching photo or No such file exist 500 pls enter correct filename');
    }
}));
exports.default = routes;
