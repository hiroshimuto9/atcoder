export const A_180 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, A, B] = [...inputVal];
  console.log(N - A + B);
}