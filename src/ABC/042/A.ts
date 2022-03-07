export const A_042 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)];
  const sortedList = [A, B, C].sort((a, b) => a - b);
  const flg = sortedList[0] === 5 && sortedList[1] === 5 && sortedList[2] === 7;
  console.log(flg ? 'YES' : 'NO');
}