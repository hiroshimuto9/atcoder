export const A_257 = (input: string) => {
  const [N, X] = [...input.trim().split(' ').map(Number)];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < N; j++) {
      text += alphabet[i];
    }
  }

  console.log(text[X - 1]);
}
