export const B_186 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const blockList = inputVal.slice(1).map((x) => x.split(' ').map(Number)).flat();
  const min = Math.min(...blockList);
  const countList = blockList.map((block) => {
    return block - min;
  })
  const output = countList.reduce((p, c) => p + c);
  console.log(output);
}