export const A_056 = (input: string) => {
  const [a, b] = [...input.trim().split(' ')]
  if (a === 'H') {
    return console.log(b==='H' ? 'H' : 'D');
  } else {
    return console.log(b==='H' ? 'D' : 'H');
  }
}