export const B_187 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const pointArray = inputVal.slice(1).map(n => n.split(" ").map(n => parseInt(n)));
  let count = 0;
  for (let i = 0; i < pointArray.length; i++) {
    for (let j = i + 1; j < pointArray.length; j++) {
      const x1 = pointArray[i][0];
      const y1 = pointArray[i][1];
      const x2 = pointArray[j][0];
      const y2 = pointArray[j][1];
      const tilt = (y2 - y1) / (x2 - x1);
      if (tilt >= -1 && tilt <= 1) {
        count++;
      }
    }
  }
  console.log(count);
}