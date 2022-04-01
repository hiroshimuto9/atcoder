export const A_023 = (input: string) => {
  console.log(input.split('').map(Number).reduce((p,c)=>p+c));
}