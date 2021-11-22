export const A_164 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [S, W] = [...inputVal];
  console.log(W >= S ? 'unsafe' : 'safe');
}