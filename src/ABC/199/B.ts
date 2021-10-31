export const B_199 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const AList = inputVal[1].split(' ').map(Number);
  const BList = inputVal[2].split(' ').map(Number);
  const aMax = Math.max(...AList);
  const bMin = Math.min(...BList);
  const output = bMin - aMax >= 0 ? bMin - aMax + 1 : 0;
  console.log(output);
}