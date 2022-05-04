export const B_223 = (input: string) => {
  let S = input.trim();
  const size = S.length;
  let resultList = []
  for (let i = 0; i < size; i++) {
    S = S.slice(1) + S.split('')[0]
    resultList.push(S)
  }
  resultList.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  console.log(resultList[0])
  console.log(resultList[resultList.length - 1])
}