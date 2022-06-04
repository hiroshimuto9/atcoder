export const B_239 = (input: string) => {
  const X = BigInt(input.trim());
  if(X >= 0) return console.log(String(X / BigInt(10)));
  if (X % BigInt(10) === BigInt(0)) return console.log(String(BigInt(String(X / BigInt(10)))));
  console.log(String(BigInt(String(X / BigInt(10))) - BigInt(1)));
}
