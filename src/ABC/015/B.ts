export const B_015 = (input: string) => {
  const [N, AList] = [...input.trim().split('\n')];
  const bugSoft = AList.split(' ').map(Number).filter(a => a > 0);
  const bugTotal = bugSoft.reduce((p, c) => p+c);
  console.log(Math.ceil(bugTotal/bugSoft.length))
}