export const A_090 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const firstList = [...inputVal[0].split('')];
  const secondList = [...inputVal[1].split('')];
  const thirdList = [...inputVal[2].split('')];
  console.log(`${firstList[0]}${secondList[1]}${thirdList[2]}`)
}