import fs from 'fs';
import { errors } from "./errors.js";
import { filesInfo, files } from './files.js';
import { toKebabCase, error, exit } from './utils.js';

const basePaths = {
  component: './src/components',
  page: './src/pages',
};

//TODO: Move all info message to a file
//TODO: Add route to routes.js when the type is 'page'
export const createStructure = (type, name) => {
  const camelCaseName = name.charAt(0).toLowerCase() + name.slice(1);
  const path = `${basePaths[type]}/${camelCaseName}`;

  if (fs.existsSync(path)) exit({ message: errors.validations.structure.exists });

  try {
    console.info(`Creating ${name} component...`);
    fs.mkdirSync(path, { recursive: true });
    files.forEach((file) => {
      createFile(file, name, path);
    });
    console.info(`${name} component created successfully`);

  } catch({ message }) {
    error(errors.structure.folders(message));
    console.info(`Removing dir: ${path}`);
    fs.rmSync(path, { recursive: true, force: true });
  }
};

const createFile = (typeFile, name, path) => {
  const camelCaseName = name.charAt(0).toLowerCase() + name.slice(1);
  const nameKebabCase = toKebabCase(name);

  const finalName = typeFile === 'css' ? camelCaseName : name;

  const file = `${path}/${filesInfo[typeFile].name(finalName)}`;
  const content = filesInfo[typeFile].content(name, camelCaseName);

  console.info(`Creating "${typeFile}" in ${file}`);
  fs.writeFileSync(file, content);
  console.info(`"${typeFile}" created successfully`);
};
