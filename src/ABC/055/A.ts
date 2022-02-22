export const A_055 = (input: string) => {
  const N = +input.trim();
  const x = N * 800;
  const y = Math.floor(N/15) * 200
  console.log(x-y);
}