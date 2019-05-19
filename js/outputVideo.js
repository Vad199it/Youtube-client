import insertVideo from './insertClip';
import getCurrentVideoCount from './getCurrentCountOfVideo';
import outputNumberOfPage from './outputNumberOfPage';
import sendRequest from './getFetch';
import fetchInitialization from './fetchInitialization';

export default function outputVideo() {
  fetchInitialization.videoCount = getCurrentVideoCount();
  for (let i = 0; i < fetchInitialization.videoCount; i += 1) {
    insertVideo(sendRequest.videoDescriptionArray[sendRequest.indexOfLeftVideo + i],
      sendRequest.videoInfoArray[sendRequest.indexOfLeftVideo + i]);
  }
  outputNumberOfPage();
}
