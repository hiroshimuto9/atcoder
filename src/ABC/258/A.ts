export const A_258 = (input: string) => {
  const K = +input.trim()
  let H = Math.floor(K / 60);
  let M = K % 60;
  console.log(`${21 + H}:${(`00` + M).slice(-2)}`);
}
