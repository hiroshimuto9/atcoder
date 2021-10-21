export const A_217 = (input: string) => {
  const inputVal = input.split(" ");
  const [S, T] = [...inputVal];
  if (S < T) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}