export const B_191 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, X] = [...inputVal[0].split(' ')];
  const AList = [...inputVal[1].split(' ')];
  const newA = AList.filter((a) => {
    return a !== X;
  })
  console.log(newA.join(' '));
}