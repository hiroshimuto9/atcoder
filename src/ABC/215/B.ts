export const B_215 = (input: string) => {
  const inputVal = input.trim();
  const N = BigInt(inputVal);
  let k = 0;
  if (N === BigInt(1)) {
    console.log(0);
  } else {
    while (N >= BigInt(Math.pow(2, k))) {
      k++;
    }
    console.log(k - 1);
  }
}