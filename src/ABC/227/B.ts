export const B_227 = (input: string) => {
  const [N, sList] = [...input.trim().split('\n')];
  const numSList = sList.split(' ').map(Number);
  let answer = 0;
  numSList.forEach((s) => {
    let ok = false;

    for (let a = 1; a <= 1000; a++) {
      for (let b = 1; b <= 1000; b++) {
        const area = 4 * a * b + 3 * a + 3 * b;

        if (area === s) {
          ok = true;
        }
      }
    }

    if (!ok) {
      answer++;
    }
  });
  console.log(answer);
}