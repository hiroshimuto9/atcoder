export const A_049 = (input: string) => {
  const c = input.trim();
  if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    return console.log('vowel');
  }
  return console.log('consonant');
}