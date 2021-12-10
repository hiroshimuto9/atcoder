export const B_137 = (input: string) => {
  const [K, X] = [...input.trim().split(' ').map(Number)];
  let numList: number[] = [];
  for(let i = X-(K-1); i <= X+(K-1); i++) {
    numList.push(i);
  }
  console.log(...numList);
}