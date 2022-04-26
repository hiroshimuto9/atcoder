export const B_005 = (input: string) => {
  const [N, ...tList] = [...input.trim().split('\n')]
  const secondsList = tList.map(Number)
  console.log(Math.min(...secondsList));
}