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
        debugger;
        const totalTodos = this.todos.length;
        let completedTodos = 0;

        // get number of completed todos
        for(var i = 0; i < totalTodos; i++) {
            if(this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // if everything is true
        if (completedTodos === totalTodos) {
            // make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
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
    
    deleteTodo() {
        const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
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

            todoLi.textContent = todoTextWithCompletion;

            // todoLi.textContent = todoList.todos[i].todoText;
            todosUl.appendChild(todoLi);
        }
    }
}
