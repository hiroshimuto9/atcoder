export const B_026 = (input: string) => {
  const [N, ...RList] = [...input.trim().split('\n').map(Number)];
  const sortedRList = RList.sort((a,b) => b-a);
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (i%2===0) {
      answer += sortedRList[i] * sortedRList[i];
    } else {
      answer -= sortedRList[i] * sortedRList[i];
    }
  }
  console.log(answer * Math.PI);
}