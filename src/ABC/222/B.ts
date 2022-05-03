export const B_222 = (input: string) => {
  const [NP, aList] = [...input.trim().split('\n')];
  const P = +NP.split(' ')[1]
  const failure = aList.split(' ').map(Number).filter(a => a < P).length;
  console.log(failure);
}