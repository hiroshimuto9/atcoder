export const A_156 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [N, R] = [...inputVal];
  if (N >= 10) {
    console.log(R)
  } else {
    console.log(R + (100 * (10 - N)))
  }
}