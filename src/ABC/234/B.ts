export const B_234 = (input: string) => {
  const N = +input.trim().split('\n')[0];
  let x: number[] = []
  let y: number[] = []

  for (let i = 1; i <= N; i++) {
    x[i] = +input.split("\n")[i].split(" ")[0]
    y[i] = +input.split("\n")[i].split(" ")[1]
  }

  let distance = 0
  let maxDistance = 0

  for (let j = 1; j <= N; j++) {
    for (let k = j + 1; k <= N; k++) {
      distance = (x[j] - x[k]) ** 2 + (y[j] - y[k]) ** 2

      if (maxDistance < distance) {
        maxDistance = distance
      }
    }
  }

  console.log(Math.sqrt(maxDistance))
}