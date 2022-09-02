
const { default: projects } = require("../hardcode");
const TodoList = require("./TodoList");
const setAttributes = require("../utils");

class ProjectList {
    constructor() {
        this.projectList = document.querySelector('.project__list');
        this.projects = projects
    }
  
     
    // Factory function for todo
    createProject(title){
        return {
            id: new Date().getTime() * Math.random() * 100000,
            title: title,
            todos: []
        }
    }
    
    removeProject(id){
      this.projects = this.projects.filter((obj) => obj.id !== id);
      this.renderProjects()
    };

    // Push contents of inputs to array
    addProject(){
        this.projects.push(this.createProject( 
            document.getElementById("title").value, 
        ))
    }
    renderForm() {
        const form = document.createElement("form")
        const formTitle = document.createElement("legend")
        const titleInput = document.createElement("input")
        setAttributes(titleInput, {
            id: "title",
            type: "text",
            placeholder: "project title",
            required: true
        })
        const addTodoButton = document.createElement("button")
        addTodoButton.innerText = "Add project"
        addTodoButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.addProject()
            this.renderProjects()
        });
        form.append(titleInput, addTodoButton, formTitle)
        document.getElementById("project__form-container").replaceChildren(form)
    }
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
            const deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            element.append(item, deleteButton)
            deleteButton.addEventListener('click', () =>{
                this.removeProject(this.projects[i].id)
            })
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