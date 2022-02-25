export const A_050 = (input: string) => {
  const inputList = input.trim().split(' ');
  if (inputList[1] === "+") return console.log(Number(inputList[0]) + Number(inputList[2]))
  return console.log(Number(inputList[0]) - Number(inputList[2]))
}