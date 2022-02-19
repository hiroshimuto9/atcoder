export const B_060 = (input: string) => {
  const [A, B, C] = [...input.trim().split(' ').map(Number)]
  let flg = false;
  for(let i = 0; i < B; i++) {
      if((A * i - C) % B === 0) {
          flg = true;
      }
  }
  console.log(flg ? "YES" : "NO");
}