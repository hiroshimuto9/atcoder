export const B_088 = (input: string) => {
  const [N, A] = [...input.trim().split('\n')];
  const sortedCard = A.split(' ').map(Number).sort((a,b) => b - a);
  let a = 0;
  let b = 0;
  for (let i = 0; i < sortedCard.length; i++) {
    const p = sortedCard[i];
    if (i % 2 === 0) {
      a += p
    } else {
      b += p
    }
  }
  console.log(a-b);
}