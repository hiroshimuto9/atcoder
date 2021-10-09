export const A_221 = (input: string) => {
  const inputVal = input.split(" ");
  const A = parseInt(inputVal[0], 10);
  const B = parseInt(inputVal[1], 10);
	console.log(32 ** (A - B));
}