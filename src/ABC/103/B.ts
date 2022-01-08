export const B_103 = (input: string) => {
  const [S, T]= [...input.trim().split('\n')];
  let sList: string[] = [...S.split('')];
  if (S === T) return console.log('Yes');
  for (let i = 0; i < sList.length; i++) {
    const lastWord = sList[sList.length - 1]
    sList = [lastWord, ...sList]
    sList.pop()
    const str = sList.join('')
    if (str === T) return console.log('Yes')
  }
  return console.log('No');
}