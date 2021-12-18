export const B_128 = (input: string) => {
  const inputVal = input.trim().split('\n');
  const N = +inputVal[0];
  let list: {index: number, name: string, point: number}[] = [];
  for (let i = 1; i <= N; i++) {
    const restaurantInfo = inputVal[i].split(' ');
    const restaurant = {
      index: i,
      name: restaurantInfo[0],
      point: +restaurantInfo[1]
    };
    list.push(restaurant)
  }
  const sortedList = list.sort((a,b) => {
    if (a.name === b.name) {
      return b.point - a.point
    }
    if (a.name < b.name) {
      return -1
    } else {
      return 1;
    }
  })
  sortedList.forEach((info) => console.log(info.index));
}