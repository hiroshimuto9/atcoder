const isUpperCase = (text: string) => {
  return /^[A-Z]+$/g.test(text)
}

export const A_171 = (input: string) => {
  const inputVal = input.trim();
  const flg = isUpperCase(inputVal);
  console.log(flg ? 'A' : 'a');
}