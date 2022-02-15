export const B_064 = (input: string) => {
  const inputVal = [...input.trim().split('\n')]
  const aList = [...inputVal[1].split(' ').map(Number)]
  console.log(Math.max(...aList) - Math.min(...aList))
}