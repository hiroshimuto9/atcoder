export const B_118 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [N, M] = [...inputVal[0].split(' ').map(Number)];
  let K = [];
  let favoriteIndexList = [];
  for(let i = 0; i < N; i++) {
    const[k, ...favoriteList] = inputVal[i+1].split(" ").map(Number);
    K.push(k);
    favoriteIndexList.push(favoriteList.map(favorite => favorite - 1));
  }

  const count = new Array(M).fill(0);

  for(let i = 0; i < N; i++) {
    favoriteIndexList[i].forEach(favoriteIndex => {
      count[favoriteIndex]++;
    });
  }
  const output = count.filter(val => val === N).length
  console.log(output);
}