export const B_201 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let mountainArray = [];
  for (let i = 1; i <= N; i++) {
    mountainArray.push({
      name: inputVal[i].split(' ')[0],
      height: +inputVal[i].split(' ')[1],
    })
  }
  const secondHeightMountain = mountainArray.sort((a, b) => b.height - a.height)[1].name;
  console.log(secondHeightMountain);
}