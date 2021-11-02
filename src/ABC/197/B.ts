export const B_197 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const [H, W, X, Y] = [...inputVal[0].split(' ').map(Number)];
  let count = -3;
  for (let i = X; i < H+1; i++) {
    if(inputVal[i][Y-1] === '.') {
      count++;
    }else{
      break;
    };
  };

  for (let i = X; ; i--) {
    if(inputVal[i][Y-1] === '.') {
      count++;
    }else{
      break;
    };
  };

  for (let i = Y-1; i < W; i++) {
    if(inputVal[X][i] === '.') {
      count++;
    }else{
      break;
    };
  };

  for (let i = Y-1; ; i--) {
    if(inputVal[X][i] === '.') {
      count++;
    }else{
      break;
    };
  };
  return console.log(count);
}