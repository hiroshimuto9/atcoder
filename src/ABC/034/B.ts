export const B_034 = (input: string) => {
  const n = +input.trim()
  console.log(n%2===0 ? n-1 : n+1);
}