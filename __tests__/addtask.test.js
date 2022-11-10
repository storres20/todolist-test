/* @jest-environment jsdom */
import addtask from '../modules/addtask.js';
import storeRetrieve from '../modules/storeRetrieve.js';

describe('addtask', () => {
  test('Add one new task to the list when completed is false', () => {
    document.body.innerHTML = '<div id="todoList">'
        + '</div>';

    const task = {
      description: 'new task', completed: false, index: 0, id: 123,
    };

    addtask(task);
    const list = document.querySelectorAll('.todoFlex');
    expect(list).toHaveLength(1);
  });

  test('Add one new task to the list when completed is true', () => {
    document.body.innerHTML = '<div id="todoList">'
        + '</div>';

    const task = {
      description: 'new task 02', completed: true, index: 1, id: 456,
    };

    addtask(task);
    const list = document.querySelectorAll('.todoFlex');
    expect(list).toHaveLength(1);
  });

  test('Add one new task to localStorage', () => {
    const task = {
      description: 'new task 03', completed: false, index: 2, id: 789,
    };

    storeRetrieve(task);
    const taskLocal = JSON.parse(localStorage.getItem('tasks'));
    expect(taskLocal).toHaveLength(3);
  });
});
