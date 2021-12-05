export const B_144 = (input: string) => {
  const inputVal = +input.trim();
  let flg = false;
  for (let i = 9; i > 0; i--) {
    const canDivide = inputVal % i === 0;
    if (canDivide) {
      const tmp = inputVal / i;
      if (tmp <= 9) {
        flg = true;
        break;
      }
    };
  }
  console.log(flg ? 'Yes' : 'No');
}