export const A_253 = (input: string) => {
  const [a, b, c] = [...input.trim().split(' ').map(Number)];
  const array = [a, b, c].sort((a, b) => a - b);
  if (array[1] == b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
