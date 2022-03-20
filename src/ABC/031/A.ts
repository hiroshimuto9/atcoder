export const A_031 = (input: string) => {
  const [A, D] = [...input.trim().split(' ').map(Number)];
  if (A <= D) {
    return console.log((A+1)*D)
  } else {
    return console.log(A*(D+1))
  }
}