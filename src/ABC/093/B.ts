export const B_093 = (input: string) => {
  const [A, B, K] = [...input.trim().split(' ').map(Number)];
  let output: number[] = [];
  for (let i = 0; i < K; i++) {
    if(A + i > B - i) {
      break
    }
    if(A + i === B - i) {
      output.push(A + i)
      break
    }else {
      output.push(A + i)
      output.push(B - i)
    }
  };
  const sortList = output.sort((a,b) => a-b);
  sortList.forEach(v => console.log(v));
}