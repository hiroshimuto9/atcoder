export const A_028 = (input: string) => {
  const N = +input.trim();
  if (N <= 59) return console.log("Bad");
  if (N <= 89) return console.log("Good");
  if (N <= 99) return console.log("Great")
  console.log("Perfect")
}