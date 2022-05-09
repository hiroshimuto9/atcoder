export const B_226 = (input: string) => {
  const [N, ...lList] = input.trim().split('\n');

  const list = new Set();
  for (let i = 0; i < +N; i++) {
    list.add(lList[i]);
  }

  console.log(list.size);
}