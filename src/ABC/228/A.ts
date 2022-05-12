export const A_228 = (input: string) => {
  const [S, T, X] = [...input.trim().split(' ').map(Number)];
  if (S < T) {
    if (S <= X && X < T) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  } else {
    if (T <= X && X < S) {
      console.log('No');
    } else {
      console.log('Yes');
    }
  }
}