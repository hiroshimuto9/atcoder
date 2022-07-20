export const A_260 = (input: string) => {
  const sList = [...input.trim().split('')];
  if (sList[0] === sList[1] && sList[0] === sList[2]) return console.log(-1);
  if (sList[0] !== sList[1] && sList[0] !== sList[2]) return console.log(sList[0]);
  if (sList[0] === sList[1]) return console.log(sList[2]);
  if (sList[0] === sList[2]) return console.log(sList[1]);
  if (sList[1] === sList[2]) return console.log(sList[0]);
}
