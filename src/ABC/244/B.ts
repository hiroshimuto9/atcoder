export const B_244 = (input: string) => {
  const [N, T] = [...input.trim().split('\n')];
  const tList = [...T.split('')];
  let x = 0;
  let y = 0;
  let direction = 0;
  for (let i = 0; i < +N; i++) {
    if (tList[i] === 'R') {
      direction++;
      if (direction > 3) {
        direction = 0;
      }
    } else {
      if (direction === 0) {
        x++;
      } else if (direction === 1) {
        y--;
      } else if (direction === 2) {
        x--;
      } else {
        y++;
      }
    }
  };
	console.log(x + ' ' + y);
}
