// export const B_219 = (input: string) => {
//   const inputVal = input.split("\n");
//   const S1 = inputVal[0];
//   const S2 = inputVal[1];
//   const S3 = inputVal[2];
//   const T = inputVal[3];
//   const i = [...T];
//   let output: string = '';
//   for (let j = 0; j < i.length; j++) {
//     if(T[j] === '1') {
//       output += S1;
//     }
//     if(T[j] === '2') {
//       output += S2;
//     }
//     if(T[j] === '3') {
//       output += S3;
//     }
//   }
//   console.log(output);
// }

// 別回答
export const B_219 = (input: string) => {
  const inputVal = input.split("\n");
  // ここは分割代入で実装可能
  const [S1, S2, S3, T] = inputVal;
  const iList = [...T];
  let output: string = '';
  // ここはわざわざfor文でインデックスアクセスせずとも
  // Tを分割した値をそのまま厳密等価判定すればOK
  for (const i of iList) {
    if(i === '1') output += S1
    if(i === '2') output += S2
    if(i === '3') output += S3
  }
  console.log(output);
}