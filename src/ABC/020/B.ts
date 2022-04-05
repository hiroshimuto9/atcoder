export const B_020 = (input: string) => {
  const [A, B] = [...input.trim().split(' ')];
  console.log(Number(A+B) * 2);
}