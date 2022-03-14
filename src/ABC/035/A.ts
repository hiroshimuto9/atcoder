export const A_035 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  console.log((A+B)%7===0 ? '4:3' : '16:9');
}