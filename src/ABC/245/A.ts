export const A_245 = (input: string) => {
  const [A, B, C, D] = [...input.trim().split(' ').map(Number)];
  const t = A * 60 * 60 + B * 60;
  const a = C * 60 * 60 + D * 60 + 1;
  t < a ? console.log("Takahashi") : console.log("Aoki");
}
