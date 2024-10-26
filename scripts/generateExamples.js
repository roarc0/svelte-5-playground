import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, "../src/routes/examples");
const outputFile = path.resolve(__dirname, "../src/lib/generated/examples.ts");

function getFolders(dirPath) {
  return fs
    .readdirSync(dirPath)
    .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
}

const folders = getFolders(sourceDir);

const content = `// This file is auto-generated
export const examplesList = ${JSON.stringify(folders, null, 2)};
`;

fs.writeFileSync(outputFile, content, "utf8");
console.log(`Generated ${outputFile} with folder list:`, folders);
