export const B_189 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, X] = inputVal[0].split(' ').map(Number);
  let intake = 0;
  let count = -1;
  for (let i = 1; i <= N; i++) {
    const [V, P] = [...inputVal[i].split(' ').map(Number)];
    const alcohol = V * P;
    intake += alcohol;
    if (intake > X * 100) {
      count = i;
      break;
    }
  }
  console.log(count);
}