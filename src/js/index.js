import './../styles/main.scss';

/*
  TODO: This is still under development, supports only vertical split
*/

const _flayoutContainer = null
const _flayoutLeftColumn = null;
const _flayoutRightColumn = null;
const _flayoutDivider = null;
let _flayoutIsDragging = false;

function flayout() {
  _flayoutContainer = document.querySelector('.flayout-main');
  _flayoutLeftColumn = document.querySelector('.flayout-pane__left');
  _flayoutRightColumn = document.querySelector('.flayout-pane__right');
  _flayoutDivider = document.querySelector('.flayout-drag');


  _flayoutDivider.addEventListener('mousedown', (e) => {
    _flayoutIsDragging = true;
    document.addEventListener('mousemove', flayoutDragStart);
    document.addEventListener('mouseup', flayoutDragStop);
  });
}


function flayoutDragStart(e) {
  if (!_flayoutIsDragging) return;

  const containerRect = _flayoutContainer.getBoundingClientRect();
  const offsetX = e.clientX - containerRect.left;

  const leftColumnWidth = ((offsetX / containerRect.width) * 100);
  const rightColumnWidth = 100 - leftColumnWidth;

  _flayoutLeftColumn.style.flex = `0 0 ${leftColumnWidth}%`;
  _flayoutRightColumn.style.flex = `0 0 ${rightColumnWidth}%`;
  _flayoutDivider.style.left = `${leftColumnWidth}%`;
}

function flayoutDragStop() {
  _flayoutIsDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}

export default flayout;
