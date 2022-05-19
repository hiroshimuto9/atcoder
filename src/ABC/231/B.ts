export const B_231 = (input: string) => {
  const [N, ...sList] = [...input.trim().split('\n')];
  const count: { [key in string]: number } = {};
  for (let i = 0; i < +N; i++) {
    if (sList[i] in count) {
      count[sList[i]]++;
    } else {
      count[sList[i]] = 1;
    }
  }
  let answer = "";
  let max = 0;
  for (const key in count) {
    if (count[key] > max) {
      max = count[key];
      answer = key;
    }
  }

  console.log(answer);
}