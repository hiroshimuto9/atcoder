export const B_021 = (input: string) => {
  const [N, ab, K, pList]= [...input.trim().split('\n')]
  const [a, b] = [...ab.split(' ')];
  const cityList = [a, b, ...pList.split(' ')];
  const uniqCityList = new Set(cityList);
  console.log(cityList.length === uniqCityList.size ? 'YES' : 'NO');
}