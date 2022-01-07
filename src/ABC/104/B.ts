export const B_104 = (input: string) => {
  const S = input.trim();
  const result = /^A[a-z]+C[a-z]+$/.test(S) ? "AC" : "WA";
  console.log(result);
}