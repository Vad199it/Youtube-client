import sendRequest from './getFetch';
import insertVideo from './insertClip';
import outputNumberOfPage from './outputNumberOfPage';
import fetchInitialization from './fetchInitialization';

const BIG_SCREEN_MIN_WIDTH = 1200;
const MEDIUM_SCREEN_MIN_WIDTH = 720;
const SMALL_SCREEN_MAX_WIDTH = 560;

export default function onResizeWindow() {
  if (window.screen.availWidth < BIG_SCREEN_MIN_WIDTH && fetchInitialization.videoCount === 4) {
    document.querySelectorAll('.container')[3].remove();
    fetchInitialization.videoCount = 3;
  }

  if (window.screen.availWidth < MEDIUM_SCREEN_MIN_WIDTH && fetchInitialization.videoCount === 3) {
    document.querySelectorAll('.container')[2].remove();
    fetchInitialization.videoCount = 2;
  }

  if (window.screen.availWidth < SMALL_SCREEN_MAX_WIDTH && fetchInitialization.videoCount === 2) {
    document.querySelectorAll('.container')[1].remove();
    fetchInitialization.videoCount = 1;
  }

  if (window.screen.availWidth >= SMALL_SCREEN_MAX_WIDTH && fetchInitialization.videoCount === 1) {
    insertVideo(sendRequest.videoDescriptionArray[sendRequest.indexOfLeftVideo + 1],
      sendRequest.videoInfoArray[sendRequest.indexOfLeftVideo + 1]);
    fetchInitialization.videoCount = 2;
  }

  if (window.screen.availWidth >= MEDIUM_SCREEN_MIN_WIDTH && fetchInitialization.videoCount === 2) {
    insertVideo(sendRequest.videoDescriptionArray[sendRequest.indexOfLeftVideo + 2],
      sendRequest.videoInfoArray[sendRequest.indexOfLeftVideo + 2]);
    fetchInitialization.videoCount = 3;
  }

  if (window.screen.availWidth >= BIG_SCREEN_MIN_WIDTH && fetchInitialization.videoCount === 3) {
    insertVideo(sendRequest.videoDescriptionArray[sendRequest.indexOfLeftVideo + 3],
      sendRequest.videoInfoArray[sendRequest.indexOfLeftVideo + 3]);
    fetchInitialization.videoCount = 4;
  }

  outputNumberOfPage();
}
