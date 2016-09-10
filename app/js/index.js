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
	}
};