const setAttributes = require("../utils");

 class TodoList {
    constructor(array, index) {
        this.todoList = document.querySelector('.todo__list');
        this.todoSubmit = document.querySelector('.todo__submit');
        this.todos = array[index].todos
        this.project = array[index]
        this.data = array
        this.index = index
        this.titleSelector =  document.getElementById("title")
    };
  
     
    // Factory function for todo
    createTodo(){
        return {
            id: new Date().getTime() * Math.random() * 100000,
            title: document.getElementById("todo__title").value,
            description: document.getElementById("todo__description").value,
            dueDate: document.getElementById("todo__dueDate").value,
            high_priority:  document.getElementById("todo__highPriority").checked
        }  
    }
    
    removeTodo(id){
      this.todos = this.todos.filter((obj) => obj.id !== id);
      this.renderTodos()
      this.data[this.index].todos = this.todos
      console.log(this.data)
      localStorage.setItem('data', JSON.stringify(this.data))
    }

    // Push contents of inputs to array
    addTodo(){
        let newTodo = this.createTodo()
        this.todos.push(newTodo)
        localStorage.setItem('data', JSON.stringify(this.data))
    }

    renderForm() {
        const form = document.createElement("form")
        const titleInput = document.createElement("input")
        setAttributes(titleInput, {
            id: "todo__title",
            type: "text",
            placeholder: "title",
            required: true
        })
        const descriptionInput = document.createElement("input")
        setAttributes(descriptionInput, {
            id: "todo__description",
            type: "text",
            placeholder: "description"
        })
        const dueDateInput = document.createElement("input")
        setAttributes(dueDateInput, {
            id: "todo__dueDate",
            type: "date",
            placeholder: "due"
        })
        const highPriorityLabel = document.createElement("label")
        setAttributes(highPriorityLabel, {
            for: "todo__highPriority"
        })
        const highPriorityInput = document.createElement("input")
        setAttributes(highPriorityInput, {
            id: "todo__highPriority",
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
        form.append(titleInput, descriptionInput, dueDateInput, highPriorityLabel, highPriorityInput, addTodoButton)
        document.getElementById("todo__form-container").replaceChildren(form)
        
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
                priority: ${this.todos[i].high_priority ? "high" : "low"}                
            `
            const deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            element.append(item, deleteButton)
            
            deleteButton.addEventListener('click', () =>{
                this.removeTodo(this.todos[i].id)
            })
      }
      this.todoList.replaceChildren(element);
    //    console.log(this.todos)
    }
}
module.exports = TodoList;