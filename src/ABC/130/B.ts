export const B_130 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, X] = [...inputVal[0].split(' ').map(Number)];
  const lList = [...inputVal[1].split(' ').map(Number)];
  let count = 1;
  let point = 0;
  for (const l of lList) {
    point += l;
    if (point > X) { break }
    count++
  }
  console.log(count);
}