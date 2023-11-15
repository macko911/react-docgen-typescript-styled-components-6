import docgen from "react-docgen-typescript";
import path from "node:path";
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const result1 = docgen.parse(path.resolve(__dirname, "./Button.tsx"));

console.log(`Generated props for Button: ${Object.keys(result1[0].props).join(", ")}`);

const result2 = docgen.parse(path.resolve(__dirname, "./ButtonStyled.tsx"));

console.log(`Generated props for ButtonStyled: ${Object.keys(result2[0].props).join(", ")}`);
