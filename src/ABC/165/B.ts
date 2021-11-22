export const B_165 = (input: string) => {
  const inputVal = BigInt(input.trim());
  let start = BigInt(100);
  let output = 0;
  while (start < inputVal) {
    output++;
    start = start * BigInt(101) / BigInt(100);
  };
  console.log(output);
}