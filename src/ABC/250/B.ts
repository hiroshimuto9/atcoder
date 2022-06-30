export const B_250 = (input: string) => {
  const [N, A, B] = [...input.trim().split(' ').map(Number)];
  for (let i = 0; i < N * A; i++) {
    let output: string = "";
    for (let j = 0; j < N * B; j++) {
      if ((Math.floor(i / A) + Math.floor(j / B)) % 2 === 1) {
        output += "#";
      } else {
        output += ".";
      }
    }
    console.log(output);
  }
}
