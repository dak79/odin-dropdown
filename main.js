const trigger = document.querySelector('#drop-btn');
const target = document.querySelector('.dropdown-content');

trigger.addEventListener('click', () => {
  toggleDisplay(target);
});

/**
 * Toggle Visibility
 *
 * @param {node} target - Node to toggle visibility
 */
const toggleDisplay = (target) => {
  let display = window.getComputedStyle(target).getPropertyValue('display');
  window;
  target.style.setProperty('display', display === 'none' ? 'grid' : 'none');
};
