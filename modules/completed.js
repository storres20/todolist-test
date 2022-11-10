module.exports = function completed() {
  const todoList = document.getElementById('todoList');
  const arr = [];
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      /* add line trough when checkbox checked */
      e.target.parentElement.children[1].classList.toggle('tach');

      const idedit = e.target.attributes.name.value; // id

      const getCompleted = JSON.parse(localStorage.getItem('tasks'));

      getCompleted.forEach((item) => {
        if (item.id === idedit) {
          item.completed = !item.completed;
        } else {
          arr.push(item.completed);
        }
      });

      localStorage.setItem('tasks', JSON.stringify(getCompleted));
    } else {
      arr.push(false);
    }
  });
};