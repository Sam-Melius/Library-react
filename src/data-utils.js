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
  const carCount = arr.reduce((acc, curr) => {
    if (acc[curr.year]) {
      acc[curr.year]++;
    }  
    else {
      acc[curr.year] = 1;
    }
    return acc;
  }, {});
  return Object.entries(carCount)
    .map(entry => ({
      year: entry[0],
      owners: entry[1]
    }));
}

export function pieHash(arr) {
  const carCount = arr.reduce((acc, curr) => {
    if (acc[curr.car_make]) {
      acc[curr.car_make]++;
    }  
    else {
      acc[curr.car_make] = 1;
    }
    return acc;
  }, {});
  return Object.entries(carCount)
    .map(entry => ({
      make: entry[0],
      owners: entry[1]
    }));
}

export function lineHash(arr) {
  const carCount = arr.reduce((acc, curr) => {
    if (acc[curr.year]) {
      acc[curr.year]++;
    }  
    else {
      acc[curr.year] = 1;
    }
    return acc;
  }, {});
  return Object.entries(carCount)
    .map(entry => ({
      year: entry[0],
      owners: entry[1]
    }));
}