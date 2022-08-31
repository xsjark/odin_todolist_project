(function(){

    var todoList   = document.querySelector('.todo__list');
    var todoSubmit = document.querySelector('.todo__submit');
  
    // Array of objects containing todos
    var todos = [
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
  
    // Factory function for todo
    function createTodo(title, description, dueDate, high_priority){
        return {
            id: todos.length + 1,
            title: title,
            description: description,
            dueDate: dueDate,
            high_priority:  high_priority
        }
    }
    
    function removeTodo(id){
      todos = todos.filter((obj) => obj.id !== id);
      renderTodos(todos)
    }

    // Push contents of inputs to array
    function addTodo(){
        todos.push(createTodo( 
            document.getElementById("title").value, 
            document.getElementById("description").value, 
            document.getElementById("due").value,
            document.getElementById("high_priority").checked
        ));
    }
  
    // Render all items in array
    function renderTodos(){
      const element = document.createElement("div")
        for(let i = 0; i < todos.length; i ++) {
            const item = document.createElement("p")
            item.innerText = `
                id: ${todos[i].id}
                title: ${todos[i].title}
                description: ${todos[i].description}
                due: ${todos[i].dueDate}
                high priority: ${todos[i].priority}                
            `
            element.appendChild(item)
            item.addEventListener('click', function(){
                removeTodo(todos[i].id)
                console.log(todos[i].id)
            });
      }
      todoList.replaceChildren(element)
    }
  
    todoSubmit.addEventListener('click', function(){
        addTodo()
        console.log(todos)
        renderTodos(todos)
    });
  
    
    renderTodos(todos)
  }());