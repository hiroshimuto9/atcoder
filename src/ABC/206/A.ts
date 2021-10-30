export const A_206 = (input: string) => {
  const inputVal = input.trim();
  const taxIncluded = Math.floor(1.08 * +inputVal);
  if (taxIncluded === 206) return console.log('so-so');
  if (taxIncluded < 206) return console.log('Yay!');
  if (taxIncluded > 206) return console.log(':(');
}