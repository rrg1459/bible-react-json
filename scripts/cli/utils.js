import { errors } from "./errors.js";

const types = new Set(['component', 'page']);

export const error = (message) => console.error(`\nError: ${message}\n`);

export const exit = ({ code = 0, message }) => {
  error(message);
  process.exit(code);
};

export const toKebabCase = (string) => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const validateArgs = (type, name) => {
  const pascalCaseRegex = /^([A-Z][a-z0-9]+)*[A-Z][a-z0-9]*$/;
  if (!type || !name) exit({ message: errors.validations.args });
  if (!types.has(type)) exit({ message: errors.validations.types });
  if (!pascalCaseRegex.test(name)) exit({ message: errors.validations.name.format(name) });
};
