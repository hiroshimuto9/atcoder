export const A_190 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B, C] = [...inputVal];
  if (C === 0) {
    if (A > B) {
      return console.log('Takahashi');
    } else {
      return console.log('Aoki');
    }
  } else {
    if (B > A) {
      return console.log('Aoki');
    } else {
      return console.log('Takahashi');
    }
  }
}