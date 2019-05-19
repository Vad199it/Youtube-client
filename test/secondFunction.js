module.exports = function getCurrentVideoCount(n) {
  const BIG_SCREEN_MIN_WIDTH = 1200;
  const MEDIUM_SCREEN_MIN_WIDTH = 720;
  const SMALL_SCREEN_MAX_WIDTH = 560;
  if (n <= SMALL_SCREEN_MAX_WIDTH) return 1;
  if (n > SMALL_SCREEN_MAX_WIDTH) {
    if (n >= MEDIUM_SCREEN_MIN_WIDTH) {
      if (n >= BIG_SCREEN_MIN_WIDTH) return 4;
      return 3;
    }
    return 2;
  }
};
