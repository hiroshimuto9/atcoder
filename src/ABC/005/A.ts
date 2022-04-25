export const A_005 = (input: string) => {
  const [x, y] = [...input.trim().split(' ').map(Number)]
  console.log(Math.floor(y/x));
}