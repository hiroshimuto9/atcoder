export const A_135 = (input: string) => {
  const [A, B] = [...input.trim().split(' ').map(Number)];
  const C: number = (A + B) / 2;
  console.log(`${Math.floor(C) == C? C : "IMPOSSIBLE"}`);
}