export const B_025 = (input: string) => {
  const [NAB, ...sdList] = [...input.trim().split('\n')]
  const [N, A, B] = [...NAB.split(' ').map(Number)]
  let start = 0;
  for (let i = 0; i < N; i++) {
    const [s, d] = [... sdList[i].split(' ')]
    if (+d < A) {
      if (s === 'East') {
        start += A
      } else {
        start -= A
      }
    }

    if (+d >= A && +d <= B) {
      if (s === 'East') {
        start += +d
      } else {
        start -= +d
      }
    }

    if (+d > B) {
      if (s === 'East') {
        start += B
      } else {
        start -= B
      }
    }
  }
  console.log(start === 0 ? 0 : start > 0 ? `East ${Math.abs(start)}` : `West ${Math.abs(start)}`)
}