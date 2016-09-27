var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(pos, todoText) {
		this.todos[pos].todoText = todoText;
	},
	deleteTodo: function(pos) {
		this.todos.splice(pos, 1);
	},
	toggleCompleted: function(pos) {
		var todo = this.todos[pos];
		todo.completed = !todo.completed;
	},
	// if everything is true, make everything false 
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// get number of completed todos
		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			// case 1: if everything is true, make everything false
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		})
	}
};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(pos) {
		todoList.deleteTodo(pos);
		view.displayTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, pos) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
				
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.id = pos;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			// get the element that was clicked on
			var elementClicked = event.target;
			// check if element clicked is a delete button
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();