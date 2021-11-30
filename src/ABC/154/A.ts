export const A_154 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [S, T] = [...inputVal[0].split(' ')];
  const [A, B] = [...inputVal[1].split(' ').map(Number)];
  if (inputVal[2] === S) {
    return console.log(A-1, B)
  }
  if (inputVal[2] === T) {
    return console.log(A, B-1)
  }
}