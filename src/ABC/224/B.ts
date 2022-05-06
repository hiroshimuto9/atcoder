export const B_224 = (input: string) => {
  const tmp = input.trim().split('\n');
  const [H, W] = [...tmp[0].split(" ").map(Number)]
  let aList: number[][] = new Array().fill([]);
  for (let i = 1; i < tmp.length; i++) {
    aList.push(tmp[i].split(" ").map(Number));
  }
  let condition = true;
  for (let i: number = 0; i < H - 1; i++) {
    for (let j: number = 0; j < W - 1; j++) {
      let A1 = aList[i][j];
      let A2 = aList[i + 1][j + 1];
      let A3 = aList[i + 1][j];
      let A4 = aList[i][j + 1];
      if (A1 + A2 > A3 + A4) {
        condition = false;
      }
    }
  }
  console.log(condition ? "Yes" : "No");
}
