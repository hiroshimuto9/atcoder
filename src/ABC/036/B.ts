export const B_036 = (input: string) => {
  const inputVal = [...input.trim().split('\n')];
  const N = +inputVal[0];
  console.log('N: ', N);
  const array = new Array(N);
  for (let i = 0; i < N; i++) {
    array[i] = inputVal[i + 1].split("");
  }
  let output = "";
  for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
          output += array[N - j - 1][i];
      }
      output += "\n";
  }
  console.log(output);
}