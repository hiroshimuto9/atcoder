export const B_221 = (input: string) => {
  const inputVal = input.split("\n");
  const S: string = inputVal[0];
  const T: string = inputVal[1];

  if(S === T) {
    console.log('Yes');
    return
  }

  let tmp: string;
  for (let i: number = 0; i < S.length - 1; i++) {
    let splitS: string[] = S.split('');
    let nextIndex = i + 1;
    tmp = splitS[i]
    splitS[i] = splitS[nextIndex];
    splitS[nextIndex] = tmp;

    if (splitS.join("") === T) {
      console.log("Yes");
      return;
    }
  }
  if (S !== T) console.log("No");
}