export const A_015 = (input: string) => {
  const [A, B] = [...input.trim().split('\n')];
  console.log(A.length > B.length ? A : B);
}