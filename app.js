const todoList = {
    todos: [],
    

    // add a new todo---------------------------
    addTodo(todoText) {
        this.todos.push({
            todoText,
            completed: false
        });
    },


    // update a todo----------------------------
    changeTodo(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    // remove todos-----------------------------
    deleteTodo(position) {
        this.todos.splice(position, 1);
    },
    // mark completed or not--------------------
    toggleCompleted(position) {
        const todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    // toggle all items-------------------------
    toggleAll() {
        const totalTodos = this.todos.length;
        let completedTodos = 0;

        this.todos.forEach((todo) => {
            if (todo.complete === true) {
                completedTodos++;
            }
        });

        this.todos.forEach((todo) => {
            // case 1: if everything is true make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            // case 2: otherwise make everything true
            } else {
                todo.completed = true;
            }
        })
    }
};

// display todo button
const handlers = {
    
    addTodo() {
        const addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    changeTodo() {
        const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        const changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    
    deleteTodo(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },

    toggleCompleted() {
        const toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll()  {
        const toggleAllButton = document.getElementById('toggleAllButton');
        todoList.toggleAll();
        view.displayTodos();
    }

};

const view = {
    displayTodos() {
        const todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''
        for (var i = 0; i < todoList.todos.length; i++) {
            const todoLi = document.createElement('li');
            const todo = todoList.todos[i];
            let todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners() {
        const todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', (event)=> {
            // get the element that was clicked on
            const elementClicked = event.target;
        
            // check if elementClicked is a delete button.
            if (elementClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
                
            }
        });
    }
};

view.setUpEventListeners();


