const colorSelector = document.getElementById('colorSelector');
const fontSelector = document.getElementById('fontSelector');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
const toggleDark = document.getElementById('toggleDark');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let fontSize = 16;

colorSelector.addEventListener('change', () => {
    const selectedColor = colorSelector.value;
    if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
    }
});


fontSelector.addEventListener('change', () => {
    document.body.style.fontFamily = fontSelector.value;
});


increaseFont.addEventListener('click', () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});

decreaseFont.addEventListener('click', () => {
    fontSize = Math.max(10, fontSize - 2);
    document.body.style.fontSize = fontSize + 'px';
});


toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';
    }
});
