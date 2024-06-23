import './../styles/main.scss';

/*
  TODO: This is still under development, supports only vertical split
*/

function init() {
  const _flayoutEventStart = new Event("flayoutStart");
  const _flayoutEventEnd = new Event("flayoutEnd");

  const _flayoutContainer = document.querySelector('.flayout-main');
  const _flayoutLeftColumn = document.querySelector('.flayout-pane__left');
  const _flayoutRightColumn = document.querySelector('.flayout-pane__right');
  const _flayoutDivider = document.querySelector('.flayout-drag');
  let _isDragging = false;

  _flayoutDivider.addEventListener('mousedown', (e) => {
    _isDragging = true;
    _flayoutContainer.dispatchEvent(_flayoutEventStart);
  });
  document.addEventListener('mousemove', _dragStart);
  document.addEventListener('mouseup', _dragStop);

  function _dragStart(e) {
    if (!_isDragging) return;
  
    const containerRect = _flayoutContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
  
    const leftColumnWidth = ((offsetX / containerRect.width) * 100);
    const rightColumnWidth = 100 - leftColumnWidth;
  
    _flayoutLeftColumn.style.flex = `0 0 ${leftColumnWidth}%`;
    _flayoutRightColumn.style.flex = `0 0 ${rightColumnWidth}%`;
    _flayoutDivider.style.left = `${leftColumnWidth}%`;
  }
  
  function _dragStop() {
    _isDragging = false;
    _flayoutContainer.dispatchEvent(_flayoutEventEnd);
  }
}
const flayout = {
  init: init,
}
export default flayout;
