import clearPageAndSendFetch from './fetchInitialization';

export default function insertSearchForm() {
  const wrapper = document.createElement('div');
  const mainInnerContainer = document.createElement('div');
  mainInnerContainer.className = 'main-inner-container';
  wrapper.className = 'wrapper';
  wrapper.appendChild(mainInnerContainer);
  mainInnerContainer.innerHTML = '<section class="search-field">'
        + '    <form class="search" autocomplete="off" name="search" method="post">'
        + '      <input class="input" type="search" id="searchKey" name="searchKey" placeholder="Search" />'
        + '      <button class="submit" type="submit" name="" value="">'
        + '      </button>'
        + '    </form>'
        + '</section>';
  const wrapperSection = document.querySelector('body');
  wrapperSection.appendChild(wrapper);
  document.querySelector('.search').onsubmit = () => clearPageAndSendFetch();
}
