export const B_204 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, AList] = [...inputVal];
  const ANumList = AList.split(' ').map(x => +x);
  let total = 0;
  for (let i = 0; i < +N; i++) {
    if (ANumList[i] > 10) {
      total += ANumList[i] - 10;
    };
  }
  console.log(total);
}