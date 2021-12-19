export const A_127 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  if (A >= 13) {
    return console.log(B);
  } else if (A >= 6) {
    return console.log(B/2);
  } else {
    return console.log(0);
  }
}