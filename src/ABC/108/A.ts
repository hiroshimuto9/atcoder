export const A_108 = (input: string) => {
  const K = +input.trim();
  const tmp = Math.ceil(K / 2);
  if (K % 2 === 0) {
    return console.log((K/2) ** 2);
  } else {
    return console.log(tmp * (tmp - 1));
  }
}