export const B_148 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const [S, T] = [...inputVal[1].split(' ')];
  let output = '';
  for (let i = 0; i < N; i++) {
    output = output + S[i] + T[i];
  }
  console.log(output);
}