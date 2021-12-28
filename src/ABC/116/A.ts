export const A_116 = (input: string) => {
  const [AB, BC, CA] = [...input.trim().split(' ').map(Number)];
  console.log(AB*BC/2);
}