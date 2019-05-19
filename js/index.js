import insertSearchForm from './insertSearchForm';
import insertVideoSection from './insertVideoSection';
import insertDots from './insertNavigationDots';
import onResizeWindow from './onResizeWindow';

insertSearchForm();
insertVideoSection();
insertDots();

window.onresize = () => onResizeWindow();
