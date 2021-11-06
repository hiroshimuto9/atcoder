export const A_188 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [X, Y] = [...inputVal];
  const canWin = Math.abs(X - Y) < 3;
  console.log(canWin ? 'Yes' : 'No');
}