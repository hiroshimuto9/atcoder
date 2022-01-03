export const A_110 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  const sortedNumList = [A, B, C].sort((a,b) => b-a);
  console.log(Number(`${sortedNumList[0]}${sortedNumList[1]}`) + sortedNumList[2]);
}