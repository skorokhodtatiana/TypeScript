"use strict";
class InputElement {
    constructor() {
        this.templateComponent = document.getElementById('project-input');
        this.divComponent = document.getElementById('app');
        const nodeFromHtml = document.importNode(this.templateComponent.content, true);
        this.element = nodeFromHtml.firstElementChild;
        this.element.id = "user-input";
        this.attach();
        this.submit();
        this.titleUnputElement = this.element.querySelector('#title');
        this.descriptionUnputElement = this.element.querySelector('#description');
    }
    submit() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc] = userInput;
            console.log(title, desc);
            todosState.addTodo(title, desc);
            //this.clearInputs();
        }
    }
    getUserInput() {
        const validateTitle = {
            value: this.titleUnputElement.value,
            minLength: 5,
            maxLength: 20
        };
        const validateDescription = {
            value: this.descriptionUnputElement.value,
            minLength: 5,
            maxLength: 200
        };
        if (validate(validateTitle) && validate(validateDescription)) {
            const titleInput = this.titleUnputElement.value;
            const descriptionInput = this.descriptionUnputElement.value;
            return [titleInput, descriptionInput];
        }
        else {
            const titleInput = this.titleUnputElement.value;
            const descriptionInput = this.descriptionUnputElement.value;
            return [titleInput, descriptionInput];
        }
    }
    attach() {
        this.divComponent.insertAdjacentElement('afterbegin', this.element);
    }
}
function validate(validationInput) {
    if (validationInput.value.length !== 0 && validationInput.value.length > validationInput.minLength && validationInput.value.length <= validationInput.maxLength) {
        return true;
    }
    else {
        return false;
    }
}
class TodosList {
    constructor(type) {
        this.type = type;
        this.templateComponent = document.getElementById('project-list');
        this.divComponent = document.getElementById('app');
        const nodeFromHtml = document.importNode(this.templateComponent.content, true);
        this.element = nodeFromHtml.firstElementChild;
        this.element.id = `${this.type}-todos`; // здесь было todos
        todosState.addListener((todos) => {
            this.todosList = todos;
            this.renderTodo();
        });
        this.attach();
        this.renderContent();
    }
    renderTodo() {
        const listEl = document.getElementById(`${this.type}-todo-list`);
        listEl.innerHTML = '';
        for (const todoItem of this.todosList) {
            const listItem = document.createElement('li');
            listItem.textContent = todoItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-todo-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toLocaleUpperCase() + ' GOALS';
        todosState.addListener((todos) => {
            const todosFiltered = todos.filter(todo => {
                if (this.type === 'active') {
                    return todo.status === TodoStatus.Active;
                }
                else {
                    return todo.status === TodoStatus.Finished;
                }
            });
            this.todosList = todosFiltered;
            this.renderTodo();
        });
    }
    attach() {
        this.divComponent.insertAdjacentElement('beforeend', this.element);
    }
}
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Active"] = 0] = "Active";
    TodoStatus[TodoStatus["Finished"] = 1] = "Finished";
})(TodoStatus || (TodoStatus = {}));
class Todo {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
class TodosState {
    constructor() {
        this.listeners = [];
        this.todos = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new TodosState();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addTodo(title, description) {
        const newTodo = new Todo(Math.random().toString(), title, description, TodoStatus.Active);
        this.todos.push(newTodo);
        for (const listenerFn of this.listeners) {
            listenerFn(this.todos.slice());
        }
    }
}
const todosState = TodosState.getInstance();
const input = new InputElement();
const activeTodosList = new TodosList('active');
const finishedTodosList = new TodosList('finished');
//# sourceMappingURL=app.js.map