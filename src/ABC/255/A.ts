export const A_255 = (input: string) => {
  const [RC, ...aList] = [...input.trim().split('\n')];
  const [R, C] = [...RC.split(' ').map(Number)];
  console.log(aList[R-1].split(' ')[C-1])
}
