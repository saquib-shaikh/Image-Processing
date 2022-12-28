import sharp from 'sharp';

const sharpImage = (
  height: number,
  width: number,
  OrigPath: string,
  newPath: string
): Promise<sharp.OutputInfo> => {
  return sharp(OrigPath).resize(width, height).toFile(newPath);
};
export default sharpImage;
