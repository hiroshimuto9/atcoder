export const B_175 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  const L = [...inputVal[1].split(' ').map(Number).sort((a,b) => a-b)];
  let count = 0;
  for (let i = 0; i < N-2; i++) {
    for (let j = i+1; j < N-1; j++) {
      if (L[i] !== L[j]) {
        const output = L.slice(j+1).reduce((p, c) => {
          if (L[j] != c && L[i] + L[j] > c) {
            return p + 1;
          } else {
            return p;
          }
        }, 0);
        count += output;
      }
    }
  }
  console.log(count);
}