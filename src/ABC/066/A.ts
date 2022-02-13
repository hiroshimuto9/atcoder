export const A_066 = (input: string) => {
  const [a, b, c] = [...input.trim().split(' ').map(Number)]
  const sortedList = [a, b, c].sort((a,b) => a - b);
  console.log(sortedList[0] + sortedList[1])
}