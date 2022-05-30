export const A_237 = (input: string) => {
  const N = +input.trim();
  console.log((-2)**31 <= N && 2**31 > N ? 'Yes' : 'No');
}
