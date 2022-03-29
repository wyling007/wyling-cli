import fs from 'fs-extra';
import path from 'path';

export const getVersion = () => {
  const packageJson = fs.readJSONSync(
    path.resolve(__dirname, '../../../package.json'),
  );
  return packageJson.version;
};
