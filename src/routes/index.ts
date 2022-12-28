import express, { Request, Response } from 'express';
import fs from 'fs';
const routes = express.Router();
import path from 'path';
import sharpImag from './../sharp/imagesharp';

routes.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.filename;
    const ht = Number(req.query.height);
    const wt = Number(req.query.width);

    if (!ht || !name || !wt || ht <= 0 || wt <= 0) {
      res
        .status(400)
        .send(
          'Error pls provide correct filename, height and width for Example http://localhost:3000/images?filename=fjord&height=100&width=200'
        );
      return;
    }

    const originalImage = `${path.resolve(
      __dirname,
      `./../../Photos/imagesOrig/${name}.jpg`
    )}`;

    const newPath = `${path.resolve(
      __dirname,
      `./../../Photos/resized/${name}_${ht}*${wt}.jpg`
    )}`;

    if (fs.existsSync(newPath)) {
      res.sendFile(newPath);
    } else {
      await sharpImag(ht, wt, originalImage, newPath);
      res.sendFile(newPath);
    }
  } catch (error) {
    res
      .status(500)
      .send(
        'Error occured while fetching photo or No such file exist 500 pls enter correct filename'
      );
  }
});

export default routes;
