import * as fs from 'fs';
import { A_221 } from "./ABC/221/A";

const main = () => {
  A_221(readFile('src/test/ABC/221/A.txt'));
}

const readFile = (filePath: string): string => {
  const input = fs.readFileSync(filePath, "utf8");
  return input;
}
// 本番用
// import * as fs from 'fs';
// const input = fs.readFileSync("/dev/stdin", "utf8");
// const main(input: string) => {...}
// main(input)
main();