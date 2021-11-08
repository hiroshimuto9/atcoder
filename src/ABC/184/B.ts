export const B_184 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, X] = [...inputVal[0].split(' ').map(Number)];
  const SList = inputVal[1].split('');
  let point = X;
  for (let i = 0; i < N; i++) {
    if (SList[i] === 'o') {
      point++;
    } else if (point > 0) {
      point--
    }
  }
  console.log(point);
}