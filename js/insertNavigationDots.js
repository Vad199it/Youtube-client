import showNextPage from './showNextPage';
import showPrevPage from './navigationHandler';

export default function insertDots() {
  const mainInnerContainer = document.querySelector('.main-inner-container');
  const buttons = document.createElement('section');
  buttons.className = 'buttons-section';
  buttons.innerHTML = '<div class="button"><span></span></div>\n'
        + '            <div class="button"><span></span></div>\n'
        + '            <div class="button"><span></span></div>';

  mainInnerContainer.appendChild(buttons);
  const dots = document.querySelectorAll('.button');
  dots[2].onclick = () => showNextPage();
  dots[0].onclick = () => showPrevPage();
}
