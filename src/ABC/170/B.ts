export const B_170 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [X, Y] = [...inputVal];
  const tmp = 4 * X - Y;
  if (tmp < 0) {
    console.log('No');
  } else if (tmp / 2 > X) {
    console.log('No');
  } else {
    console.log( tmp % 2 === 0 ? 'Yes' : 'No' );
  }
}