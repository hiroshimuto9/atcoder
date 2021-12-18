export const A_128 = (input: string) => {
  const [A, P] = [...input.trim().split(' ').map(Number)];
  console.log(Math.floor((A*3+P)/2));
}