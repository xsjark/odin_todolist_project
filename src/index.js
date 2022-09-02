const ProjectList = require("./components/ProjectList");
const TodoList = require("./components/TodoList");

import projects from "./hardcode";
import "./style.css"

(function () {

    // Add button listener
    // document.querySelector('.todo__submit').addEventListener('click', function(){
    //     todolist.addTodo()
    //     todolist.renderTodos()
    // });

    // Render todo list
    let todolist = new TodoList(projects, 0);
    todolist.renderTodos();
    todolist.renderForm();

    let projectlist = new ProjectList()
    projectlist.renderProjects()

    

  })();