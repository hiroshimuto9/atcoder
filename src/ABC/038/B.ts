export const B_038 = (input: string) => {
  const displayList = [...input.trim().split('\n')]
  const [H1, W1] = [...displayList[0].split(' ')];
  const [H2, W2] = [...displayList[1].split(' ')];
  const flg = H1 === H2 || H1 === W2 || W1 === H2 || W1 === W2;
  console.log(flg ? 'YES' : 'NO');
}