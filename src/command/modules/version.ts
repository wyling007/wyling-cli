import fs from 'fs-extra';
import path from 'path';

export const logVersion = () => {
  const packageJson = fs.readJSONSync(
    path.resolve(__dirname, '../../../package.json'),
  );
  console.log(packageJson.version);
};
