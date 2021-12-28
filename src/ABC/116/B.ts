export const B_116 = (input: string) => {
  const s = +input.trim();
  let i = 0
  let ai = [s]
  while (true) {
    i++
    let r = 0
    if (i === 1) {
      r = calc(s)
    } else {
      r = calc(ai[i - 1])
    }

    if (ai.indexOf(r) > -1) {
      ai.push(r)
      break
    }
    ai.push(r)
  }
  console.log(ai.length);
}

export const calc = (n: number) => {
  if (n % 2 === 0) {
    return n / 2
  }
  return n * 3 + 1
}