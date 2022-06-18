export const B_245 = (input: string) => {
  const [N, aList] = [...input.trim().split('\n')];
  const numList = aList.split(' ').map(Number);
  let count = 0;
  while (true) {
    if (!numList.includes(count)) {
      console.log(count);
      break;
    }
    count++;
  }
}
