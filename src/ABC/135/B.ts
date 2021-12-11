export const B_135 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const pList = [...inputVal[1].split(' ').map(Number)];
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (pList[i] !== i + 1) {
      count++;
      if (count > 2) {
        return console.log("NO");
      }
    }
  }
  return console.log("YES");
}