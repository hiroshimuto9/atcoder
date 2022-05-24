export const A_234 = (input: string) => {
  const t = +input.trim();
  const ftVal = ft(t);
  const ftPlusT = ftVal + t;
  const fftPlusT = ft(ftPlusT);
  const fft = ft(ftVal);
  console.log(ft(fftPlusT + fft));
}

export const ft = (val: number) => {
  return (val ** 2) + (2 * val) + 3;
}