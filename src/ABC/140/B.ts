export const B_140 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const AList = [...inputVal[1].split(' ').map(Number)];
  const BList = [...inputVal[2].split(' ').map(Number)];
  const CList = [...inputVal[3].split(' ').map(Number)];
  let total = 0;
  for (let i = 0; i < N; i++) {
    const food = AList[i];
    const point = BList[food-1];
    total += point;
    if (food - AList[i-1] === 1) {
      total += CList[food - 2];
    }
  }
  console.log(total);
}