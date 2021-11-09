export const B_182 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const numList = inputVal[1].split(' ').map(Number);
  let maxGcd = 0;
  let res = 0;
  const min = 2;
  const max = Math.max(...numList);

  for (let i = min; i <= max; i++) {
    let count = 0;
    numList.forEach((num) => {
      if (num % i === 0) {
        count++;
      }
    });
    if (count > maxGcd) {
      res = i;
      maxGcd = count;
    }
  }
  console.log(res);
}