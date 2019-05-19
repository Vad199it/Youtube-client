module.exports = function outputNumberOfPage(videoCount, indexOfLeftVideo, videoInfoArrayLength) {
  /* let num = Math.ceil(indexOfLeftVideo/videoCount); */
  if (indexOfLeftVideo !== 0) {
    if (indexOfLeftVideo >= videoInfoArrayLength - videoCount) {
      /* dots[0].innerHTML = '';
            dots[1].innerHTML = '';
            dots[2].innerHTML = num + 1; */
      return 3;
    }
    /* dots[0].innerHTML = '';
            dots[1].innerHTML = num + 1;
            dots[2].innerHTML = ''; */
    return 2;
  }
  /* dots[0].innerText = num + 1;
        dots[1].innerHTML = '';
        dots[2].innerHTML = ''; */
  return 1;
};
