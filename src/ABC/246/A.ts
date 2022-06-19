export const A_246 = (input: string) => {
  const [[x1,y1],[x2,y2],[x3,y3]] = [...input.trim().split('\n').map(e => e.split(' ').map(Number))];
  const x = x1 ^ x2 ^ x3;
  const y = y1 ^ y2 ^ y3;
  console.log(`${x} ${y}`);
}
