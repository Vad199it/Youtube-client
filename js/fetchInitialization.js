import sendRequest from './getFetch';
import getCurrentVideoCount from './getCurrentCountOfVideo';

export default function fetchInitialization() {
  const nextPageToken = '';
  getCurrentVideoCount();
  sendRequest(nextPageToken);
}
