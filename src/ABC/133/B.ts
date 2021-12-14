export const B_133 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, D] = [...inputVal[0].split(' ').map(Number)];
  let tmp: number[][] = [];
  for (let i = 0; i < N; i++) {
    tmp.push(inputVal[i+1].split(' ').map(Number));
  }
  let output = 0;
  for (let i = 0; i < N-1; i++) {
    for (let j = i+1; j < N; j++) {
      let distance = 0;
      for (let k = 0; k < D; k++) {
        distance += (tmp[i][k] - tmp[j][k]) ** 2;
      }
      distance = Math.sqrt(distance);
      if (distance === Math.floor(distance)) {
        output++
      }
    }
  }
  console.log(output);
}