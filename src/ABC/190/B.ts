export const B_190 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, S, D] = inputVal[0].split(' ').map(Number);
  let output;
  for (let i = 1; i <= N; i++) {
    const [X, Y] = [...inputVal[i].split(' ').map(Number)];
    if (X >= S || Y <= D) {
      output = 'No';
    } else {
      output = 'Yes';
      break;
    }
  }
  return console.log(output);
}