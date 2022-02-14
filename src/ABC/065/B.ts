export const B_065 = (input: string) => {
  const [N, ...aList] = [...input.trim().split('\n').map(Number)]
  let count = 0;
  let btn = 1;
  let isTwo = false;
  for (let i = 0; i <= N; i++) {
    count++
    btn = aList[btn - 1];
    if (btn === 2) {
      isTwo = true
      break
    }
  }
  console.log(isTwo ? count : -1)
}