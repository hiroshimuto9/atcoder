export const A_105 = (input: string) => {
  const [N, K] = [...input.trim().split(' ').map(Number)];
  if(N % K === 0){
    console.log('0');
  }else{
    console.log('1');
  }
}