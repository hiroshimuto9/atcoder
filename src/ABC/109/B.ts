export const B_109 = (input: string) => {
  const [N, ...wList] = [...input.trim().split('\n')];
  let flg = true;
  for (let i = 0; i < +N; i++) {
    const word = wList[i];
    const usedWordList = wList.slice(0, i);
    if (i > 0) {
      const lastWord = wList[i-1].slice(-1);
      const rule1 = usedWordList.some((w) => w === word);
      const rule2 = word.slice(0,1) !== lastWord;
      if (rule1 || rule2) {
        flg = false;
        break;
      }
    }
  }
  console.log(flg ? 'Yes' : 'No');
}