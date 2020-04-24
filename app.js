var rangeBitwiseAnd = function (m, n) {
  let smaller = m;
  let higher = n;

  //   if (smaller > higher) {
  //     smaller = n;
  //     higher = m;
  //   }
  let bitwiseAndResult = smaller;
  for (let i = smaller + 1; i <= higher; i++) {
    bitwiseAndResult = bitwiseAndResult & i;
  }

  return bitwiseAndResult;
};
rangeBitwiseAnd(0, 1);
