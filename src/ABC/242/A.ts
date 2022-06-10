export const A_242 = (input: string) => {
  const [A, B, C, X] = [...input.trim().split(' ').map(Number)];
  if (X <= A) {
    return console.log(1.0);
  } else if(X <= B) {
    return console.log(C/(B-A));
  } else {
    return console.log(0);
  }
}
