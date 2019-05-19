import sendRequest from './getFetch';
import outputVideo from './outputVideo';
import getCurrentVideoCount from './getCurrentCountOfVideo';

export default function showNextPage() {
  const countOfVideo = getCurrentVideoCount();
  const arrOfElement = document.querySelectorAll('.container');
  for (let i = 0; i < countOfVideo; i += 1) {
    arrOfElement[i].remove();
  }
  sendRequest.indexOfLeftVideo += countOfVideo;
  if (sendRequest.videoDescriptionArray.length - sendRequest.indexOfLeftVideo <= 2 * countOfVideo) {
    sendRequest(sendRequest.pageToken);
  } else { outputVideo(); }
}
