export const A_121 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [H, W] = [...inputVal[0].split(' ').map(Number)];
  const [h, w] = [...inputVal[1].split(' ').map(Number)];
  console.log((H-h)*(W-w));
}