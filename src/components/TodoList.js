 class TodoList {
    constructor() {
        this.todoList = document.querySelector('.todo__list');
        this.todoSubmit = document.querySelector('.todo__submit');
        this.todos = [
            {
                id: 1,
                title: "Homework",
                description: "Refactor app",
                dueDate: "09/12/2022",
                high_priority: true
            },
            {
                id: 2,
                title: "Fix UI",
                description: "margins off",
                dueDate: "09/11/2022",
                high_priority: false
            },
        ];
    }
  
     
    // Factory function for todo
    createTodo(title, description, dueDate, high_priority){
        return {
            id: todos.length + 1,
            title: title,
            description: description,
            dueDate: dueDate,
            high_priority:  high_priority
        }
    }
    
    removeTodo(id){
      todos = todos.filter((obj) => obj.id !== id);
      renderTodos(todos)
    }

    // Push contents of inputs to array
    addTodo(){
        todos.push(createTodo( 
            document.getElementById("title").value, 
            document.getElementById("description").value, 
            document.getElementById("due").value,
            document.getElementById("high_priority").checked
        ))
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
            item.addEventListener('click', function(){
                removeTodo(this.todos[i].id)
            })
      }
      this.todoList.replaceChildren(element);
      console.log("rneder")
    }

  
    // todoSubmit.addEventListener('click', function(){
    //     addTodo()
    //     console.log(todos)
    //     renderTodos()
    // });

}
export default TodoList;