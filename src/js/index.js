import './../styles/main.scss';

/*
  TODO: This is still under development, supports only vertical split
*/
const FL_MIN_PANE_WIDTH = 15;

function flayout(){
  console.log("flayout!")
  const restrictMinPaneWidth = (paneWidth) => {
    return paneWidth > FL_MIN_PANE_WIDTH ? paneWidth : FL_MIN_PANE_WIDTH;
  }

  const groups = Array.from(document.querySelectorAll('.flayout-group'));
  groups.forEach((group) => {
    const panes = Array.from(group.querySelectorAll('.flayout-pane'));

    panes[0].style.width = `${group.clientWidth / 2}px`;;
    panes[1].style.width = `${group.clientWidth / 2}px`;

    const dragElement = document.createElement('div');
    dragElement.classList.add('flayout-drag');
    dragElement.setAttribute('draggable', 'true');
    dragElement.style.left = `${group.offsetWidth / 2}px`;
    panes[0].after(dragElement);

    dragElement.addEventListener('dragstart', (event) => {
      event.target.classList.add('dragging')
    });

    dragElement.addEventListener('drag', (event) => {
      if (event.clientX <= 0) {
        return;
      }
      const group = event.target.parentElement;
      const paneA = event.target.previousElementSibling;
      const paneB = event.target.nextElementSibling;

      let delta = event.clientX - group.offsetLeft;

      paneA.style.width = `${restrictMinPaneWidth(delta)}px`;
      paneB.style.width = `${restrictMinPaneWidth(group.clientWidth - delta)}px`;
    });

    dragElement.addEventListener('dragend', (event) => {
      const paneA = event.target.previousElementSibling;
      dragElement.style.left = `${paneA.offsetWidth}px`;

      event.target.classList.remove('dragging');
      paneA.classList.remove('dragging');
    });
  });
}

export default flayout;
