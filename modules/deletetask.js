import removetask from './removetask.js';

export default function deletask() {
  const checkbox = document.querySelectorAll('.checkbox:nth-child(1)');
  checkbox.forEach((item) => {
    if (item.checked === true) {
      removetask(item.name);
      item.parentElement.parentElement.remove();
    } else {
      item.checked = false;
    }
  });
}
