export const A_186 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, W] = [...inputVal];
  console.log(Math.floor(N/W))
}