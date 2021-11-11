export const B_179 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let continueDoublet: boolean = false;
  for (let i = 1; i <= N; i++) {
    if (i + 2 > N) break;
    const [D1a, D1b]: number[] = inputVal[i].split(' ').map(Number);
    const [D2a, D2b]: number[] = inputVal[i+1].split(' ').map(Number);
    const [D3a, D3b]: number[] = inputVal[i+2].split(' ').map(Number);
    if (D1a === D1b && D2a === D2b && D3a === D3b) {
      continueDoublet = true;
    }
  }
  return console.log(continueDoublet ? 'Yes' : 'No');
}