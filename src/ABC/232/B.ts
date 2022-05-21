export const B_232 = (input: string) => {
  const [S, T] = [...input.trim().split('\n')];
  const output = new Set()
  for(let i = 0; i < S.length; i++) {
      const sub = (T[i].charCodeAt(0)-S[i].charCodeAt(0)+26)%26
      output.add(sub)
  }
  if(output.size === 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}