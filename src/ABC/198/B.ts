export const B_198 = (input: string) => {
  const N = input.trim();
  let output = 'No';
  for (let i = 0; i < 10; i++) {
    let addZero = '0'.repeat(i) + N;
    if(addZero === addZero.split('').reverse().join('')) {
      output = 'Yes';
      break;
    }
  }
  console.log(output);
}