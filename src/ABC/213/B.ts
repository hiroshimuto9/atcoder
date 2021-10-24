export const B_213 = (input: string) => {
  const inputVal = input.split('\n');
  const AList = inputVal[1].split(' ').map((x) => +x);
  const sortedNumList = [...AList].sort((a, b) => b - a);
  const output = AList.indexOf(sortedNumList[1]) + 1;
  console.log(output);
}