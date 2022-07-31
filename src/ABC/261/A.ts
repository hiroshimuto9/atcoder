export const A_261 = (input: string) => {
  const [L1, R1, L2, R2] = [...input.trim().split(' ').map(Number)];
  if (R1 < L2 || R2 < L1) {
    console.log(0);
  } else {
    console.log(Math.min(R1, R2) - Math.max(L1, L2));
  }
}
