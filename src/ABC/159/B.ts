export const B_159 = (input: string) => {
  const inputVal = input.trim();
  const reversedVal = inputVal.split('').reverse().join('');
  const condition1 = inputVal === reversedVal;
  const N = inputVal.length;
  const c = (N - 1) / 2;
  const forward = inputVal.slice(0, c);
  const back = inputVal.slice(-c);
  const condition2 = forward === back;
  const flg = condition1 && condition2;
  console.log(flg ? 'Yes' : 'No');
}