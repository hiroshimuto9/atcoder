export const A_144 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  if (A <= 9 && B <= 9) {
    console.log(A * B);
  } else {
    console.log(-1);
  }
}