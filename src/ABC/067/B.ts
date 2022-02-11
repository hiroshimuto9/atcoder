export const B_067 = (input: string) => {
  const inputVal = [...input.trim().split('\n')]
  const [N, K] = [...inputVal[0].split(' ').map(Number)]
  const lList = [...inputVal[1].split(' ').map(Number)]
  const sum = lList.sort((a,b) => b-a).slice(0, K).reduce((p,c) => p+c);
  console.log(sum);
}