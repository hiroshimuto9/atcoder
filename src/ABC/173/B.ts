export const B_173 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let C0 = 0;
  let C1 = 0;
  let C2 = 0;
  let C3 = 0;
  for (let i = 1; i <= N; i++) {
    const result = inputVal[i];
    if (result === 'AC') C0++
    if (result === 'WA') C1++
    if (result === 'TLE') C2++
    if (result === 'RE') C3++
  }
  console.log(`AC x ${C0}`)
  console.log(`WA x ${C1}`)
  console.log(`TLE x ${C2}`)
  console.log(`RE x ${C3}`)
}