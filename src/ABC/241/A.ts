export const A_241 = (input: string) => {
  const aList = [...input.trim().split(' ').map(Number)];
  const firstIndex = aList[0];
  const secondIndex = aList[firstIndex];
  console.log(aList[secondIndex]);
}
