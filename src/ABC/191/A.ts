export const A_191 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [V, T, S, D] = [...inputVal];
  if ((V * T) <= D && (V * S) >= D) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}