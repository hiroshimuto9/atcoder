export const A_057 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)]
  console.log(A+B >= 24 ? A+B-24 : A+B);
}