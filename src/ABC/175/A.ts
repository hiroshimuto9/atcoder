export const A_175 = (input: string) => {
  const inputVal = input.trim();
  if (inputVal === 'RRR') {
    return console.log(3)
  } else if (inputVal.indexOf('RR') >= 0) {
    return　console.log(2)
  } else if (inputVal.indexOf('R') >= 0) {
    return console.log(1)
  } else {
    return　console.log(0)
  }
}