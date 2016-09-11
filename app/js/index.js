var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
				
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(pos, todoText) {
		this.todos[pos].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(pos) {
		this.todos.splice(pos, 1);
		this.displayTodos();
	},
	toggleCompleted: function(pos) {
		var todo = this.todos[pos];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	// if everything is true, make everything false 
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// Case 1: if everything's true, make everything false
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		// Case 2: otherwise, make everything true
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};