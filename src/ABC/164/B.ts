export const B_164 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  let [A, B, C, D] = [...inputVal];
  while (A > 0 || C > 0) {
    C -= B;
    if (C <= 0) {
    console.log('Yes');
    break;
    };

    A -= D;
    if (A <= 0) {
    console.log('No');
    break;
    }
  }
}