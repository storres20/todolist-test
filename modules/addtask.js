import { node } from 'webpack';
import storeRetrieve from './storeRetrieve.js';

export default function addtask(task) {
  const todoList = document.getElementById('todoList');

  todoList.innerHTML += `
    <div class="todoFlex">
      <div class="todoDiv">
        <input type="checkbox" name="${task.id}" class="checkbox" ${task.completed ? 'checked' : ''} >
        <input class="todoP" name="${task.id}" value="${task.description}" >
      </div>
      <i class="bi bi-three-dots-vertical dots"></i>
    </div>
  `;

  /* store and retrieve tasks in LocalStorage */
  storeRetrieve(task);
}

module.exports = addtask;
