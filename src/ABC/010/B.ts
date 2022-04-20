export const B_010 = (input: string) => {
  const [n, aList] = [...input.trim().split('\n')];
  const petals = [...aList.split(' ').map(Number)];
  let count = 0;
  for(let i = 0; i < petals.length; i++) {
    let petal = petals[i]
    for(let j = petal; j > 0; j--) {
      const pattern1 = j % 2 === 1;
      const pattern2 = j % 3 === 0 || j % 3 === 1;
      if (!pattern1 || !pattern2) count++
      if (pattern1 && pattern2) break
    }
  }
  console.log(count);
}