export const B_219 = (input: string) => {
  const inputVal = input.split("\n");
  const S1 = inputVal[0];
  const S2 = inputVal[1];
  const S3 = inputVal[2];
  const T = inputVal[3];
  const i = [...T];
  let output: string = '';
  for (let j = 0; j < i.length; j++) {
    if(T[j] === '1') {
      output += S1;
    }
    if(T[j] === '2') {
      output += S2;
    }
    if(T[j] === '3') {
      output += S3;
    }
  }
  console.log(output);
}