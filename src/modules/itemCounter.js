const itemCounter = (data) => {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count++;
  }
  return count;
};

export default itemCounter;