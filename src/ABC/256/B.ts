export const B_256 = (input: string) => {
  const [N, aList] = [...input.trim().split('\n')];
  const aNumList = [...aList.split(' ').map(Number)]
  let pieces = new Array<number>();
  for (let i = 0; i < +N; i++) {
    pieces.push(0);
    pieces = pieces.map((piece) => piece + aNumList[i]);
  }
  console.log(pieces.filter((piece) => piece >= 4).length);
}
