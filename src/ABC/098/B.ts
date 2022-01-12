export const B_098 = (input: string) => {
  const [N, S] = [...input.trim().split('\n')];
  const sList = S.split('');
  let count = 0;
  for (let i = 1; i < +N; i++) {
    const left = sList.slice(0, i);
    const right = sList.slice(i);

    const s1 = left.filter(v => right.indexOf(v) > -1);
    const s2 = right.filter(v => left.indexOf(v) > -1);
    const uniq = new Set([...s1, ...s2]);
    count = Math.max(uniq.size, count)
  }
  console.log(count);
}