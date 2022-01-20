export const B_090 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  let count = 0;
  for (let i = A; i <= B; i++) {
    const tmp = [...i.toString().split('')].reverse();
    const reversedNum = Number(tmp.join(''))
    if (i === reversedNum) count++
  }
  console.log(count);
}