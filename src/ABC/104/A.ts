export const A_104 = (input: string) => {
  const R = +input.trim();
  if (R < 1200) {
    return console.log('ABC');
  } else if (R < 2800) {
    return console.log('ARC');
  } else {
    return console.log('AGC');
  }
}