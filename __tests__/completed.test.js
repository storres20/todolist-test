/* @jest-environment jsdom */
import completed from '../modules/completed.js';
import storeRetrieve from '../modules/storeRetrieve.js';

describe('test for completed', () => {
  test('completed true', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="777" class="checkbox" checked >
          <input class="todoP" name="777x" value="new task" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>`
    + '</div>';

    // clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));

    // add a task in localstorage
    const task = {
      description: 'new task', completed: true, index: 3, id: '777',
    };
    storeRetrieve(task);

    // completed function
    completed();

    // Event
    const completeChange = document.querySelector('.checkbox');
    // Create a new 'change' event
    const event = new Event('click', { bubbles: true });
    // Dispatch it.
    completeChange.dispatchEvent(event);

    // completed status change on localstorage
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit[0].completed).toEqual(false);
  });

  test('completed false', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="777" class="checkbox" >
          <input class="todoP" name="777x" value="new task" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>`
    + '</div>';

    // clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));

    // add a task in localstorage
    const task = {
      description: 'new task', completed: false, index: 3, id: '777',
    };
    storeRetrieve(task);

    // completed function
    completed();

    // Event
    const completeChange = document.querySelector('.checkbox');
    // Create a new 'change' event
    const event = new Event('click', { bubbles: true });
    // Dispatch it.
    completeChange.dispatchEvent(event);

    // completed status change on localstorage
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit[0].completed).toEqual(true);
  });

  test('other case', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="777" class="checkbox" >
          <input class="todoP" name="777x" value="new task" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>`
    + '</div>';

    // clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));

    // add a task in localstorage
    const task = {
      description: 'new task 888', completed: false, index: 8, id: '888',
    };
    storeRetrieve(task);

    // completed function
    completed();

    // Event
    const completeChange = document.querySelector('.checkbox');
    // Create a new 'change' event
    const event = new Event('click', { bubbles: true });
    // Dispatch it.
    completeChange.dispatchEvent(event);

    // completed status no change on localstorage
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit[0].description).toEqual('new task 888');
  });

  test('when you dont click on checkbox', () => {
    document.body.innerHTML = '<div id="todoList">'
    + `<div class="todoFlex">
        <div class="todoDiv">
          <input type="checkbox" name="777" class="checkbox" >
          <input class="todoP" name="777x" value="new task" >
        </div>
        <i class="bi bi-three-dots-vertical dots"></i>
      </div>`
    + '</div>';

    // clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));

    // add a task in localstorage
    const task = {
      description: 'new task 888', completed: false, index: 8, id: '888',
    };
    storeRetrieve(task);

    // completed function
    completed();

    // Event
    const todoP = document.querySelector('.todoP');
    // Create a new 'change' event
    const event = new Event('click', { bubbles: true });
    // Dispatch it.
    todoP.dispatchEvent(event);

    // completed status no change on localstorage
    const getedit = JSON.parse(localStorage.getItem('tasks'));
    expect(getedit[0].description).toEqual('new task 888');
  });
});