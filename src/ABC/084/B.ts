export const B_084 = (input: string) => {
  const [AB, S] = [...input.trim().split('\n')];
  const [A, B] = [...AB.split(' ')];
  const index = Number(A) + 1;
  const sList = [...S.split('')]
  const condition1 = sList[index - 1] === '-'
  let count = 0;
  sList.forEach(v => {
    if (v === '-') count++
  });
  const flg = condition1 && count === 1;
  console.log(flg ? 'Yes' : 'No');
}