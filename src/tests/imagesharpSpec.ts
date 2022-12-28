import path from 'path';
import sharpImage from '../sharp/imagesharp';

const filename = 'palmtunnel';
const height = 100;
const width = 200;
const OrigPath = `${path.resolve(
  __dirname,
  `./../../Photos/imagesOrig/${filename}.jpg`
)}`;

const newPath = `${path.resolve(
  __dirname,
  `./../../Photos/resized/${filename}_${height}*${width}.jpg`
)}`;
describe('image resize successfully', (): void => {
  it('rejects promise if something went wrong', async (): Promise<void> => {
    await expectAsync(
      sharpImage(height, width, OrigPath, newPath)
    ).toBeResolved();
  });
});
