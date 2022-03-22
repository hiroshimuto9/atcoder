export const A_030 = (input: string) => {
  const [A, B, C, D] = [...input.trim().split(' ').map(Number)];
  if (B/A > D/C) {
    return console.log("TAKAHASHI")
  } else if (B/A < D/C) {
    return console.log("AOKI")
  }
  return console.log("DRAW")
}