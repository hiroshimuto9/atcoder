export const A_047 = (input: string) => {
  const [a, b, c] = input.trim().split(' ').map(Number);
  const sortedList = [a, b, c].sort((a, b) => b - a)
  const flg = sortedList[0] === sortedList[1] + sortedList[2]
  console.log(flg ? 'Yes' : 'No')
}