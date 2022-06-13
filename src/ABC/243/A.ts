export const A_243 = (input: string) => {
  const [V, A, B, C] = [...input.trim().split(' ').map(Number)];
  let shampoo = V;
  let answer;
  while(shampoo >= 0) {
      shampoo -= A;
      if(shampoo < 0) {
          answer = "F";
          break;
      }
      shampoo -= B;
      if(shampoo < 0) {
          answer = "M";
          break;
      }
      shampoo -= C;
      if(shampoo < 0) {
          answer = "T";
          break;
      }
  }
  console.log(answer);
}
