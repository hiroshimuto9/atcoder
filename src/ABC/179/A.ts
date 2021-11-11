export const A_179 = (input: string) => {
  const lastText = input.trim().slice(-1);
  if (lastText === 's') {
    const output = input.trim() + `es`;
    return console.log(output);
  } else {
    const output = input.trim() + `s`;
    return console.log(output);
  }
}