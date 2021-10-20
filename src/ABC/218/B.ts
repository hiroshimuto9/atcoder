export const B_218 = (input: string) => {
  const inputVal = input.split(" ");
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const output = inputVal.map((index) => {
    return alphabet[(Number(index) - 1)];
  })
  console.log(output.join(""));
}