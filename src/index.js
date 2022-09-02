const ProjectList = require("./components/ProjectList");
const TodoList = require("./components/TodoList");

import projects from "./hardcode";
import "./style.css"

(function () {
    let todolist = new TodoList(projects, 0);
    todolist.renderTodos();
    todolist.renderForm();

    let projectlist = new ProjectList(projects)
    projectlist.renderProjects()
    projectlist.renderForm()
  })();