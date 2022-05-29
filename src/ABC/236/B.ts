export const B_236 = (input: string) => {
  const [N, A] = [...input.trim().split('\n')]
  const aList = [...A.split(' ').map(Number)];
  const countList = Array(+N).fill(0);
  for (let i = 0; i < aList.length; i++) {
    countList[aList[i] - 1]++;
  }
  let answer = 0;
  for (let i = 0; i < +N; i++) {
    if (countList[i] !== 4) {
      answer = i + 1;
      break;
    }
  }

  console.log(answer);
}