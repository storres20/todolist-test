/* @jest-environment jsdom */
import deletetask from '../modules/deletetask.js';
import storeRetrieve from '../modules/storeRetrieve.js';
import removetask from '../modules/removetask.js';

describe('deletetask', () => {
  test('delete one task from html', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
    <div class="todoDiv">
      <input type="checkbox" name="777" class="checkbox" checked >
      <input class="todoP" name="777" value="new task" >
    </div>
    <i class="bi bi-three-dots-vertical dots"></i>
  </div>
  <div class="todoFlex">
    <div class="todoDiv">
      <input type="checkbox" name="888" class="checkbox" >
      <input class="todoP" name="888" value="new task 02" >
    </div>
    <i class="bi bi-three-dots-vertical dots"></i>
  </div>
  `
        + '</div>';

    const task = {
      description: 'new task', completed: true, index: 3, id: 777,
    };
    storeRetrieve(task);
    const task2 = {
      description: 'new task 02', completed: false, index: 4, id: 888,
    };
    storeRetrieve(task2);

    deletetask();
    const list = document.querySelectorAll('.todoFlex');
    expect(list).toHaveLength(1);
  });

  test('delete one task from localStorage', () => {
    const task3 = {
      description: 'new task 999', completed: true, index: 9, id: 999,
    };
    storeRetrieve(task3);

    removetask(999);
    const taskLocal = JSON.parse(localStorage.getItem('tasks'));
    expect(taskLocal).toHaveLength(2);
  });
});