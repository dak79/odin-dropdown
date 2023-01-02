
       /* TriggerEvent 
* Attach listener and trigger the event
* */
export const triggerEvent = () => {
  const trigger = document.querySelector('#drop-btn');
  const target = document.querySelector('.dropdown-content');
  trigger.addEventListener('click', () => {
    toggleDisplay(target);
  });

}

       /**
        * @param {node} target - Node that fire event
        */
export const toggleDisplay = (target) => {
  let display = window.getComputedStyle(target).getPropertyValue('display');
  target.style.setProperty('display', display === 'none' ? 'grid' : 'none');
};
