function sum(...nums) {
  return nums.reduce((sum, val) => {
    return sum + val;
  }, 0);
}

module.exports = {
  sum,
};
