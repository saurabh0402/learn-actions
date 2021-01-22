function actionPerformer(f, initial) {
  return function (...nums) {
    return nums.reduce((tot, val) => {
      return f(tot, val);
    }, initial);
  };
}

module.exports = {
  sum: actionPerformer((a, b) => a + b, 0),
  mul: actionPerformer((a, b) => a * b, 1),
};
