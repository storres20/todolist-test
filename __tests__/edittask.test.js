/* @jest-environment jsdom */
import edittask from '../modules/edittask.js';
import storeRetrieve from '../modules/storeRetrieve.js';

describe('edittask', () => {
  test('edit one task', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="777x" class="checkbox" checked >
          <input class="todoP" name="777" value="new task" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>`
    + '</div>';

    // add a task in localstorage
    const task = {
      description: 'new task', completed: true, index: 3, id: '777',
    };
    storeRetrieve(task);

    // edittask function
    edittask();

    // modify the task description from "new task" to "new task edited"
    const newedit = document.getElementsByName('777');
    newedit[0].value = 'new task edited';

    // Event
    const inputEdit = document.querySelector('.todoP');
    // Create a new 'change' event
    const event = new Event('change', { bubbles: true });
    // Dispatch it.
    inputEdit.dispatchEvent(event);

    // the task from localstorage was edited from "new task" to "new task edited"
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit[0].description).toEqual('new task edited');
  });
});