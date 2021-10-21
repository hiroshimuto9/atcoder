export const B_217 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const contestList = ["ABC" , "ARC" , "AGC" , "AHC"];
  const [...inputList] = [...inputVal];
  const output = contestList.filter(i => inputList.indexOf(i) === -1);
  console.log(output[0])
}