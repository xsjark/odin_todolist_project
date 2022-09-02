const setAttributes = require("../utils");

 class TodoList {
    constructor(array, index) {
        this.todoList = document.querySelector('.todo__list');
        this.todoSubmit = document.querySelector('.todo__submit');
        this.todos = array[index].todos
        this.project = array[index]
    };
  
     
    // Factory function for todo
    createTodo(title, description, dueDate, high_priority){
        return {
            id: this.todos.length + 1,
            title: title,
            description: description,
            dueDate: dueDate,
            high_priority:  high_priority
        }
        
    }
    
    removeTodo(id){
      this.todos = this.todos.filter((obj) => obj.id !== id);
      this.renderTodos()
    }

    // Push contents of inputs to array
    addTodo(){
        this.todos.push(this.createTodo( 
            document.getElementById("title").value, 
            document.getElementById("description").value, 
            document.getElementById("dueDate").value,
            document.getElementById("highPriority").checked
        ))
        console.log(
            document.getElementById("title").value, 
            document.getElementById("description").value, 
            document.getElementById("dueDate").value,
            document.getElementById("highPriority").checked
        )
    }

    renderForm() {
        const form = document.createElement("form")
        const formTitle = document.createElement("legend")
        formTitle.innerText = this.project.title
        const titleInput = document.createElement("input")
        setAttributes(titleInput, {
            id: "title",
            type: "text",
            placeholder: "title",
            required: true
        })
        const descriptionInput = document.createElement("input")
        setAttributes(descriptionInput, {
            id: "description",
            type: "text",
            placeholder: "description"
        })
        const dueDateInput = document.createElement("input")
        setAttributes(dueDateInput, {
            id: "dueDate",
            type: "date",
            placeholder: "due"
        })
        const highPriorityLabel = document.createElement("label")
        highPriorityLabel.innerText = "high priority"
        setAttributes(highPriorityLabel, {
            for: "highPriority"
        })
        const highPriorityInput = document.createElement("input")
        setAttributes(highPriorityInput, {
            id: "highPriority",
            type: "checkbox"
        })
        const addTodoButton = document.createElement("button")
        addTodoButton.innerText = "Add toado"
        setAttributes(highPriorityLabel, {
            type: "button",
        })
        addTodoButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.addTodo()
            this.renderTodos()
        });
        form.append(titleInput, descriptionInput, dueDateInput, highPriorityLabel, highPriorityInput, addTodoButton, formTitle)
        document.getElementById("form-container").replaceChildren(form)
        
    }
  
    // Render all items in array
    renderTodos(){
      const element = document.createElement("div")
        for(let i = 0; i < this.todos.length; i ++) {
            const item = document.createElement("p")
            item.innerText = `
                id: ${this.todos[i].id}
                title: ${this.todos[i].title}
                description: ${this.todos[i].description}
                due: ${this.todos[i].dueDate}
                high priority: ${this.todos[i].priority}                
            `
            element.appendChild(item)
            item.addEventListener('click', () =>{
                this.removeTodo(this.todos[i].id)
            })
      }
      this.todoList.replaceChildren(element);
      console.log(this.todos)
    }
}
module.exports = TodoList;