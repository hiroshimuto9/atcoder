export const A_249 = (input: string) => {
  const [A, B, C, D, E, F, X] = [...input.trim().split(' ').map(Number)];
  const T = B * (Math.floor(X / (A + C)) * A + Math.min((X %( A + C)),A));
  const Ao = E * (Math.floor(X /(D + F)) * D + Math.min((X % (D + F)),D));
  if (T < Ao) {
    return console.log("Aoki");
  } else if(T > Ao){
    return console.log("Takahashi");
  } else {
    return console.log("Draw");
  }
}
