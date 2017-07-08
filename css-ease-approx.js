function cssEaseApprox(t) {
  if (t <= 0) return 0;
  if (t >= 1)  return 1;
  return 1.0042954579734844 * Math.exp(-6.4041738958415664 * Math.exp(-7.2908241330981340 * t)))
}

module.exports = cssEaseApprox;
