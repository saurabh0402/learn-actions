function actionPerformer(f, initial) {
  return function (...nums) {
    return nums.reduce((tot, val) => {
      return f(tot, val);
    }, initial);
  };
}

function actionPerformerTakingFirstElem(f) {
  return function (...nums) {
    if (!nums.length) {
      return 0;
    }

    const initial = nums[0];
    nums = nums.slice(1);
    return actionPerformer(f, initial)(nums);
  };
}

module.exports = {
  sum: actionPerformer((a, b) => a + b, 0),
  mul: actionPerformer((a, b) => a * b, 1),
  subLeft: actionPerformerTakingFirstElem((a, b) => a - b),
};
