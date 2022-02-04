export const A_075 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)]
  if (A === B) return console.log(C);
  if (A === C) return console.log(B);
  if (C === B) return console.log(A);
}