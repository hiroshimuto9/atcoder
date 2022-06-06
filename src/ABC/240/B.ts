export const B_240 = (input: string) => {
  const [N, aList] = [...input.trim().split('\n')];
  console.log(new Set(aList.split(' ').map(Number)).size)
}
