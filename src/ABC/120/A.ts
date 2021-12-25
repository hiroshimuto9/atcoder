export const A_120 = (input: string) => {
  const [A, B, C] = input.trim().split(' ').map(Number);
  const output = Math.floor(B/A);

  if(C<=output){
    console.log(C);
  }else{
    console.log(output);
  }
}