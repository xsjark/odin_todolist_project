
const { default: projects } = require("../hardcode");
const TodoList = require("./TodoList");

class ProjectList {
    constructor() {
        this.projectList = document.querySelector('.project__list');
        this.projects = projects
    }
  
     
    // // Factory function for todo
    // createProject(title, description, dueDate, high_priority){
    //     // return {
    //     //     id: this.todos.length + 1,
    //     //     title: title,
    //     //     description: description,
    //     //     dueDate: dueDate,
    //     //     high_priority:  high_priority
    //     // }
    // }
    
    // removeProject(id){
    // //   this.todos = this.todos.filter((obj) => obj.id !== id);
    // //   this.renderTodos()
    // };

    // // Push contents of inputs to array
    // addProject(){
    //     // this.todos.push(this.createTodo( 
    //     //     document.getElementById("title").value, 
    //     //     document.getElementById("description").value, 
    //     //     document.getElementById("due").value,
    //     //     document.getElementById("high_priority").checked
    //     // ))
    // }
  
    // Render all items in array
    renderProjects(){
      const element = document.createElement("div")
        for(let i = 0; i < this.projects.length; i ++) {
            const item = document.createElement("p")
            item.innerText = `
                id: ${this.projects[i].id}
                title: ${this.projects[i].title}
                description: ${this.projects[i].description}
                due: ${this.projects[i].dueDate}               
            `
            element.appendChild(item)
            item.addEventListener('click', () =>{
                let button = new TodoList(this.projects, i)
                // this.removeTodo(this.todos[i].id)
                button.renderTodos()
                button.renderForm()
                 // Add button listener
                //  let submit_button = document.querySelector('.todo__submit')
                //  submit_button.cloneNode(true).addEventListener('click', function(){
                //     button.addTodo()
                //     button.renderTodos()
                // });
            })
            
      }
      
      this.projectList.replaceChildren(element);
    //   console.log("rneder")
    }
}
module.exports = ProjectList;