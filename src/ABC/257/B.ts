export const B_257 = (input: string) => {
  const [N, K, Q] = [...input.trim().split('\n')[0].split(' ').map(Number)];
  const aList = [...input.trim().split('\n')[1].split(' ').map(Number)];
  const lList = [...input.trim().split('\n')[2].split(' ').map(Number)];
  const output = [...aList];
  for (let index = 0; index < Q; index++) {
    if (!(output[lList[index] - 1] === N || output.includes(output[lList[index] - 1] + 1))) {
      output[lList[index] - 1] = output[lList[index]-1] + 1;
    }

  }
  console.log(output.join(' '));
}