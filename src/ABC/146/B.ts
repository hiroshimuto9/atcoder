export const B_146 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const S = inputVal[1];
  const Z = 'Z'.charCodeAt(0);
  let output = '';
  for (let i = 0; i < S.length; i++) {
    let charCode = S.charCodeAt(i);
    charCode += N;
    if (charCode > Z) {
      charCode -= 26
    }
    output += String.fromCharCode(charCode);
  }
  console.log(output);
}