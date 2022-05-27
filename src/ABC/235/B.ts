export const B_235 = (input: string) => {
  const [N, hList] = [...input.trim().split('\n')];
  const list =  hList.split(' ').map(Number);
  for (let i = 0; i < +N; i++) {
    if (i === +N - 1 || list[i] >= list[i + 1]) {
      console.log(list[i]);
      return;
    }
  }
}