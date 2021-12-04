export const B_149 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  let [A, B, K] = [...inputVal];
  if (K <= A) {
    return console.log(A-K, B);
  } else {
    if (K - A <= B) {
      return console.log(0, B-(K-A));
    } else {
      return console.log(0,0);
    }
  }
}