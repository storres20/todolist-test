export default function edittask() {
  const todoList = document.getElementById('todoList');
  const arr = [];
  todoList.addEventListener('change', (e) => {
    const etask = e.target;

    if (e.target.classList.contains('todoP')) {
      const newValue = etask.value; // new value
      const idedit = etask.attributes.name.value; // id

      const getedit = JSON.parse(localStorage.getItem('tasks'));
      getedit.forEach((item) => {
        if (item.id === idedit) {
          item.description = newValue;
        } else {
          arr.push(item.description);
        }
      });

      localStorage.setItem('tasks', JSON.stringify(getedit));
    } else {
      arr.push(false);
    }
  });
}