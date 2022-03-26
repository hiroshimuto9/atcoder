export const A_027 = (input: string) => {
  const [l1, l2, l3] = [...input.trim().split(' ').map(Number)];
  if (l1 == l2) {
    console.log(l3);
  } else if (l2 == l3) {
    console.log(l1);
  } else {
    console.log(l2);
  }
}