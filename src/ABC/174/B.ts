export const B_174 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, D] = [...inputVal[0].split(' ').map(Number)];
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const [X, Y] = [...inputVal[i].split(' ').map(Number)];
    const distance = Math.sqrt((X ** 2 + Y ** 2));
    if (distance <= D) {
      count++
    }
  }
  console.log(count);
}