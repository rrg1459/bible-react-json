import { validateArgs } from "./utils.js";
import { createStructure } from "./create.js";

const type = process.argv[2];
const name = process.argv[3];

validateArgs(type, name);
createStructure(type, name);
