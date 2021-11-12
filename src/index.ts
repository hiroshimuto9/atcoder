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
import { A_216 } from './ABC/216/A';
import { B_216 } from './ABC/216/B';
import { A_215 } from './ABC/215/A';
import { B_215 } from './ABC/215/B';
import { A_214 } from './ABC/214/A';
import { B_214 } from './ABC/214/B';
import { A_213 } from './ABC/213/A';
import { B_213 } from './ABC/213/B';
import { A_212 } from './ABC/212/A';
import { B_212 } from './ABC/212/B';
import { A_211 } from './ABC/211/A';
import { B_211 } from './ABC/211/B';
import { A_210 } from './ABC/210/A';
import { B_210 } from './ABC/210/B';
import { A_209 } from './ABC/209/A';
import { B_209 } from './ABC/209/B';
import { A_208 } from './ABC/208/A';
import { B_208 } from './ABC/208/B';
import { A_207 } from './ABC/207/A';
import { B_207 } from './ABC/207/B';
import { A_206 } from './ABC/206/A';
import { B_206 } from './ABC/206/B';
import { A_205 } from './ABC/205/A';
import { B_205 } from './ABC/205/B';
import { A_204 } from './ABC/204/A';
import { B_204 } from './ABC/204/B';
import { A_203 } from './ABC/203/A';
import { B_203 } from './ABC/203/B';
import { A_202 } from './ABC/202/A';
import { B_202 } from './ABC/202/B';
import { A_201 } from './ABC/201/A';
import { B_201 } from './ABC/201/B';
import { A_200 } from './ABC/200/A';
import { B_200 } from './ABC/200/B';
import { A_199 } from './ABC/199/A';
import { B_199 } from './ABC/199/B';
import { A_198 } from './ABC/198/A';
import { B_198 } from './ABC/198/B';
import { A_197 } from './ABC/197/A';
import { B_197 } from './ABC/197/B';
import { A_196 } from './ABC/196/A';
import { B_196 } from './ABC/196/B';
import { A_195 } from './ABC/195/A';
import { B_195 } from './ABC/195/B';
import { A_194 } from './ABC/194/A';
import { B_194 } from './ABC/194/B';
import { A_193 } from './ABC/193/A';
import { B_193 } from './ABC/193/B';
import { A_192 } from './ABC/192/A';
import { B_192 } from './ABC/192/B';
import { A_191 } from './ABC/191/A';
import { B_191 } from './ABC/191/B';
import { A_190 } from './ABC/190/A';
import { B_190 } from './ABC/190/B';
import { A_189 } from './ABC/189/A';
import { B_189 } from './ABC/189/B';
import { A_188 } from './ABC/188/A';
import { B_188 } from './ABC/188/B';
import { A_187 } from './ABC/187/A';
import { B_187 } from './ABC/187/B';
import { A_186 } from './ABC/186/A';
import { B_186 } from './ABC/186/B';
import { A_185 } from './ABC/185/A';
import { B_185 } from './ABC/185/B';
import { A_184 } from './ABC/184/A';
import { B_184 } from './ABC/184/B';
import { A_183 } from './ABC/183/A';
import { B_183 } from './ABC/183/B';
import { A_182 } from './ABC/182/A';
import { B_182 } from './ABC/182/B';
import { A_181 } from './ABC/181/A';
import { B_181 } from './ABC/181/B';
import { A_180 } from './ABC/180/A';
import { B_180 } from './ABC/180/B';
import { A_179 } from './ABC/179/A';
import { B_179 } from './ABC/179/B';
import { A_178 } from './ABC/178/A';
import { B_178 } from './ABC/178/B';

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
  A_216(readFile('src/test/ABC/216/A.txt'));
  B_216(readFile('src/test/ABC/216/B.txt'));
  A_215(readFile('src/test/ABC/215/A.txt'));
  B_215(readFile('src/test/ABC/215/B.txt'));
  A_214(readFile('src/test/ABC/214/A.txt'));
  B_214(readFile('src/test/ABC/214/B.txt'));
  A_213(readFile('src/test/ABC/213/A.txt'));
  B_213(readFile('src/test/ABC/213/B.txt'));
  A_212(readFile('src/test/ABC/212/A.txt'));
  B_212(readFile('src/test/ABC/212/B.txt'));
  A_211(readFile('src/test/ABC/211/A.txt'));
  B_211(readFile('src/test/ABC/211/B.txt'));
  A_210(readFile('src/test/ABC/210/A.txt'));
  B_210(readFile('src/test/ABC/210/B.txt'));
  A_209(readFile('src/test/ABC/209/A.txt'));
  B_209(readFile('src/test/ABC/209/B.txt'));
  A_208(readFile('src/test/ABC/208/A.txt'));
  B_208(readFile('src/test/ABC/208/B.txt'));
  A_207(readFile('src/test/ABC/207/A.txt'));
  B_207(readFile('src/test/ABC/207/B.txt'));
  A_206(readFile('src/test/ABC/206/A.txt'));
  B_206(readFile('src/test/ABC/206/B.txt'));
  A_205(readFile('src/test/ABC/205/A.txt'));
  B_205(readFile('src/test/ABC/205/B.txt'));
  A_204(readFile('src/test/ABC/204/A.txt'));
  B_204(readFile('src/test/ABC/204/B.txt'));
  A_203(readFile('src/test/ABC/203/A.txt'));
  B_203(readFile('src/test/ABC/203/B.txt'));
  A_202(readFile('src/test/ABC/202/A.txt'));
  B_202(readFile('src/test/ABC/202/B.txt'));
  A_201(readFile('src/test/ABC/201/A.txt'));
  B_201(readFile('src/test/ABC/201/B.txt'));
  A_200(readFile('src/test/ABC/200/A.txt'));
  B_200(readFile('src/test/ABC/200/B.txt'));
  A_199(readFile('src/test/ABC/199/A.txt'));
  B_199(readFile('src/test/ABC/199/B.txt'));
  A_198(readFile('src/test/ABC/198/A.txt'));
  B_198(readFile('src/test/ABC/198/B.txt'));
  A_197(readFile('src/test/ABC/197/A.txt'));
  B_197(readFile('src/test/ABC/197/B.txt'));
  A_196(readFile('src/test/ABC/196/A.txt'));
  B_196(readFile('src/test/ABC/196/B.txt'));
  A_195(readFile('src/test/ABC/195/A.txt'));
  B_195(readFile('src/test/ABC/195/B.txt'));
  A_194(readFile('src/test/ABC/194/A.txt'));
  B_194(readFile('src/test/ABC/194/B.txt'));
  A_193(readFile('src/test/ABC/193/A.txt'));
  B_193(readFile('src/test/ABC/193/B.txt'));
  A_192(readFile('src/test/ABC/192/A.txt'));
  B_192(readFile('src/test/ABC/192/B.txt'));
  A_191(readFile('src/test/ABC/191/A.txt'));
  B_191(readFile('src/test/ABC/191/B.txt'));
  A_190(readFile('src/test/ABC/190/A.txt'));
  B_190(readFile('src/test/ABC/190/B.txt'));
  A_189(readFile('src/test/ABC/189/A.txt'));
  B_189(readFile('src/test/ABC/189/B.txt'));
  A_188(readFile('src/test/ABC/188/A.txt'));
  B_188(readFile('src/test/ABC/188/B.txt'));
  A_187(readFile('src/test/ABC/187/A.txt'));
  B_187(readFile('src/test/ABC/187/B.txt'));
  A_186(readFile('src/test/ABC/186/A.txt'));
  B_186(readFile('src/test/ABC/186/B.txt'));
  A_185(readFile('src/test/ABC/185/A.txt'));
  B_185(readFile('src/test/ABC/185/B.txt'));
  A_184(readFile('src/test/ABC/184/A.txt'));
  B_184(readFile('src/test/ABC/184/B.txt'));
  A_183(readFile('src/test/ABC/183/A.txt'));
  B_183(readFile('src/test/ABC/183/B.txt'));
  A_182(readFile('src/test/ABC/182/A.txt'));
  B_182(readFile('src/test/ABC/182/B.txt'));
  A_181(readFile('src/test/ABC/181/A.txt'));
  B_181(readFile('src/test/ABC/181/B.txt'));
  A_180(readFile('src/test/ABC/180/A.txt'));
  B_180(readFile('src/test/ABC/180/B.txt'));
  A_179(readFile('src/test/ABC/179/A.txt'));
  B_179(readFile('src/test/ABC/179/B.txt'));
  A_178(readFile('src/test/ABC/178/A.txt'));
  B_178(readFile('src/test/ABC/178/B.txt'));
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