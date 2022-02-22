export function createColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    };
  });
  return columns;
}

export function barData(arr) {
  const count = arr.reduce((acc, curr) => {
    if (acc[curr.favorite_color]) {
      acc[curr.favorite_color].count++;
      acc[curr.favorite_color].total = acc[curr.favorite_color].total + curr.age;
    }
    else {
      acc[curr.favorite_color] = {};
      acc[curr.favorite_color].count = 1;
      acc[curr.favorite_color].total = curr.age;
    }
    return acc;
  }, {});
  return Object.entries(count)
    .map(entry => ({
      color: entry[0],
      averageAge: entry[1].total / entry[1].count
    }));
}