export const B_081 = (input: string) => {
  const [N, A] = [...input.trim().split('\n')];
  const aList = A.split(' ').map(Number);
  let flg: boolean = true;
  let cnt: number = 0;

  while (flg) {
    for (let i = 0; i < +N; i++) {
      if (aList[i] % 2 != 0) {
        flg = false;
      }
      aList[i] = aList[i]/2;
    }
    cnt++;
  }
  console.log(cnt -1);
}