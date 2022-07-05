export const B_253 = (input: string) => {
  const [HW, ...sList] = [...input.trim().split('\n')];
  const [H, W] = HW.split(' ').map(Number);
  const eachList = sList.map((v) => v.trim().split(''));
  let point: { h: number; w: number }[] = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (eachList[i][j] === 'o') {
        point.push({ h: i, w: j });
      }
    }
  }
  const result = Math.abs(point[0].h - point[1].h) + Math.abs(point[0].w - point[1].w);
  console.log(result);
}
