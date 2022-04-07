export const A_018 = (input: string) => {
  const [A, B, C] = [...input.trim().split('\n').map(Number)];
  const sorted = [A,B,C].sort((a,b) => b-a);
  console.log(sorted.indexOf(A) + 1)
  console.log(sorted.indexOf(B) + 1)
  console.log(sorted.indexOf(C) + 1)
}