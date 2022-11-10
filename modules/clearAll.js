import deletask from './deletetask.js';

export default function clearAll() {
  const clearAll = document.querySelector('.clearAll');

  clearAll.addEventListener('click', () => {
    deletask();
  });
}
