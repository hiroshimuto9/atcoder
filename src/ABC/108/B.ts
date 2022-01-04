export const B_108 = (input: string) => {
  // ヒント　回転行列
  const [x1, y1, x2, y2] = [...input.trim().split(' ').map(Number)];
  const dX = x2 - x1;
  const dY = y2 - y1;

  const x3 = x2 - dY;
  const y3 = y2 + dX;
  const x4 = x1 - dY;
  const y4 = y1 + dX;

  console.log(x3, y3, x4, y4);
}