/* @jest-environment jsdom */
import clearAll from '../modules/clearAll.js';
import Ntask from '../modules/ntask.js';
import storeRetrieve from '../modules/storeRetrieve.js';

describe('Clear All Completed test function', () => {
  test('clear all checkbox checked', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="111" class="checkbox" checked >
          <input class="todoP" name="111" value="new task 1" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>
      <div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="222" class="checkbox" checked >
          <input class="todoP" name="222" value="new task 2" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>
      <div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="333" class="checkbox" >
          <input class="todoP" name="333" value="new task 3" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>
      <div class="clearAll">Clear all completed</div>`
    + '</div>';

    // clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));

    // add new tasks in localstorage
    storeRetrieve(new Ntask('new task 1', true, 1, '111'));
    storeRetrieve(new Ntask('new task 2', true, 2, '222'));
    storeRetrieve(new Ntask('new task 3', false, 3, '333'));

    // clear all function
    clearAll();

    // Event
    const clearbtn = document.querySelector('.clearAll');
    // Create a new 'change' event
    const event = new Event('click', { bubbles: true });
    // Dispatch it.
    clearbtn.dispatchEvent(event);

    // check localstorage
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit).toHaveLength(1);
  });
});