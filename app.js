const todoList = {
    todos: [],
    displayTodos() {
        if (this.todos.length === 0) {
            console.log("todo list is empty");
        } else {
            console.log("My todos: ");
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }

    },

    // add a new todo---------------------------
    addTodo(todoText) {
        this.todos.push({
            todoText,
            completed: false
        });
        this.displayTodos();
    },

    // update a todo----------------------------
    changeTodo(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    // remove todos-----------------------------
    deleteTodo(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    // mark completed or not--------------------
    toggleCompleted(position) {
        const todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    // toggle all items-------------------------
    toggleAll() {
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
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
}