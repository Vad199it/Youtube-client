import sendRequest from './getFetch';
import outputVideo from './outputVideo';
import getCurrentVideoCount from './getCurrentCountOfVideo';

export default function showPrevPage() {
  const countOfVideo = getCurrentVideoCount();
  sendRequest.indexOfLeftVideo -= countOfVideo;
  if (sendRequest.indexOfLeftVideo >= 0) {
    const arrOfElement = document.querySelectorAll('.container');
    for (let i = 0; i < countOfVideo; i += 1) {
      arrOfElement[i].remove();
    }

    outputVideo();
  } else {
    sendRequest.indexOfLeftVideo = 0;
    const arrOfElement = document.querySelectorAll('.container');
    for (let i = 0; i < countOfVideo; i += 1) {
      arrOfElement[i].remove();
    }
    outputVideo();
  }
}
