const paginate = (dataArr) => {
  const perPage = 8;
  const pages = Math.ceil(dataArr.length / perPage);

  const newDataArr = Array.from({ length: pages }, (_, index) => {
    const start = index * perPage;
    return dataArr.slice(start, start + perPage);
  });
  return newDataArr;
};

export default paginate;
