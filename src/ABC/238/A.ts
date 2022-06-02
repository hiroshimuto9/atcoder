export const A_238 = (input: string) => {
  const N = +input.trim();
  console.log(2**N > N ** 2 ? 'Yes' : 'No');
}
