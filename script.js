const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');

function attachDragEvent (target) {
  target.addEventListener('dragstart', () => {
    target.classList.add('flying');
  });

  target.addEventListener('dragend', () => {
    target.classList.remove('flying');
  });

}

addTaskBtn.addEventListener('click', () => {
  const input = prompt('what is the task ?');

  if (!input) return;

  const taskCard = document.createElement('p');
  taskCard.classList.add('item');
  taskCard.setAttribute('draggable', true);
  taskCard.innerText = input;

  attachDragEvent(taskCard);

  todoBoard.appendChild(taskCard);

})

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => attachDragEvent(item));

allBoards.forEach((board) => {
  board.addEventListener('dragover', () => {
    const flyElement = document.querySelector('.flying');
    board.appendChild(flyElement);
  });
});
  
