export const B_195 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B, W] = [...inputVal];
  const wg = W * 1000;

  const cMin = Math.floor(wg / B);
  const cMax = Math.ceil(wg / A);

  let minCount = 0;
  let maxCount = 0;
  for (let i = cMin; i <= cMax; ++i) {
    const iMin = A * i;
    const iMax = B * i;
    if (iMin <= wg && wg <= iMax) {
      if (!minCount) minCount = i;
      maxCount = i;
    }
  }

  const output = minCount === 0 ? 'UNSATISFIABLE' : `${minCount} ${maxCount}`;
  return console.log(output);
}