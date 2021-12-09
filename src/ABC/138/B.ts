export const B_138 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const AList = [...inputVal[1].split(' ').map(Number).map(v => 1 / v)];
  const output = AList.reduce((p, c) => p + c);
  console.log(1/output);
}