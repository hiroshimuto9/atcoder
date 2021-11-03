export const A_194 = (input: string) => {
  const inputVal = input.trim().split(' ').map(Number);
  const [A, B] = [...inputVal];
  // 無脂乳固形分 = A
  // 乳脂肪分 = B
  // 乳固形分=無脂乳固形分+乳脂肪分
  const C = A + B;

  if(C >= 15 && B >= 8) return console.log('1');
  if(C >= 10 && B >= 3) return console.log('2');
  if(C >= 3) return console.log('3');
  return console.log('4');
}