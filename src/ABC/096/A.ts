export const A_096 = (input: string) => {
  const [a, b]= [...input.trim().split(' ').map(Number)];
  if (b >= a) {
    return console.log(a);
  } else {
    return console.log(a-1);
  }
}