export const B_203 = (input: string) => {
  const inputVal = input.trim().split(' ');
  const [N, K] = [...inputVal];
  let total = 0;
  for (let j = 1; j <= +K; j++) {
    for (let i = 1; i <= +N; i++) {
      const roomNum = Number(`${i}0${j}`);
      total += roomNum;
    }
  }
return console.log(total);
}