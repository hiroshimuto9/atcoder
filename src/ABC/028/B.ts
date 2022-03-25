export const B_028 = (input: string) => {
  const P = +input.trim();
  let amount = P;
  let result = 0;
  for(let i = 10; i >= 1; i--) {
    const factorial = factorialize(i)
    if (amount < factorial) continue;
    result += Math.floor(amount / factorial);
    amount = P % factorial;
  }
  console.log(result);
}

export const factorialize = (k: number): number => {
  if (k <= 1) return 1;
  return k * factorialize(k - 1);
}