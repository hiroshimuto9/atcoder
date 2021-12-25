export const A_119 = (input: string) => {
  const S = input.trim();
  console.log(new Date(S) <= new Date("2019/4/30") ? "Heisei" : "TBD");
}