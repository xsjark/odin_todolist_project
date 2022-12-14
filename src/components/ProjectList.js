
const TodoList = require("./TodoList");
const setAttributes = require("../utils");

class ProjectList {
    constructor(array, index) {
        this.projectList = document.querySelector('.project__list');
        this.projects = array
    }
  
    // Factory function for todo
    createProject(){
        return {
            id: new Date().getTime() * Math.random() * 100000,
            title:  document.getElementById("title").value,
            todos: []
        }
    }
    
    removeProject(id){
      this.projects = this.projects.filter((obj) => obj.id !== id);
      localStorage.setItem('data', JSON.stringify(this.projects))
      this.renderProjects()
      console.log(this.projects)
    };

    // Push contents of inputs to array
    addProject(){
        this.projects.push(this.createProject())
        localStorage.setItem('data', JSON.stringify(this.projects))
    }

    renderForm() {
        const form = document.createElement("form")
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
        form.append(titleInput, addTodoButton)
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
            `
            const deleteButton = document.createElement("button")
            deleteButton.innerText = "Delete"
            element.append(item, deleteButton)
            let button = new TodoList(this.projects, i)
            deleteButton.addEventListener('click', () =>{
                this.removeProject(this.projects[i].id)
                button.clearTodos()
            })
            item.addEventListener('click', () =>{
                button.renderTodos()
                button.renderForm()
            })
            
      }
      
      this.projectList.replaceChildren(element);
    //   console.log("rneder")
    
    }
    
}
module.exports = ProjectList;