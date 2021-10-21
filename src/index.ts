import * as fs from 'fs';
import { A_221 } from "./ABC/221/A";
import { B_221 } from './ABC/221/B';
import { A_220 } from './ABC/220/A';
import { B_220 } from './ABC/220/B';
import { A_219 } from './ABC/219/A';
import { B_219 } from './ABC/219/B';
import { A_218 } from './ABC/218/A';
import { B_218 } from './ABC/218/B';
import { A_217 } from './ABC/217/A';
import { B_217 } from './ABC/217/B';

const main = () => {
  A_221(readFile('src/test/ABC/221/A.txt'));
  B_221(readFile('src/test/ABC/221/B.txt'));
  A_220(readFile('src/test/ABC/220/A.txt'));
  B_220(readFile('src/test/ABC/220/B.txt'));
  A_219(readFile('src/test/ABC/219/A.txt'));
  B_219(readFile('src/test/ABC/219/B.txt'));
  A_218(readFile('src/test/ABC/218/A.txt'));
  B_218(readFile('src/test/ABC/218/B.txt'));
  A_217(readFile('src/test/ABC/217/A.txt'));
  B_217(readFile('src/test/ABC/217/B.txt'));
}

const readFile = (filePath: string): string => {
  const input = fs.readFileSync(filePath, "utf8");
  return input;
}
// 本番用
// import * as fs from 'fs';
// const input = fs.readFileSync("/dev/stdin", "utf8");
// const main = (input: string) => {...}
// main(input)
main();