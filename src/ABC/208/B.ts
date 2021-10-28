export const B_208 = (input: string) => {
  const inputVal = input.trim();
  // 使用硬貨枚数
  let count = 0;
  // 商品の値段
  let P = Number(inputVal);
  // N乗円の階乗結果を詰め込む用
  let kouka = [];
  // 硬貨の種類
  let product;
  for(let i = 1; i < 11; i++) {
    product = 1;
    for (let j = i; j > 0; j--) {
      product *= j;
    }
    kouka.push(product);
  }

  for (let i = 10; i > 0; i--) {
    count = count + Math.floor(P / kouka[i-1]);
    P = P % kouka[i-1]
  }
  return console.log(count);
}