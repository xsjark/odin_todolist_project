const ProjectList = require("./components/ProjectList");
const TodoList = require("./components/TodoList");

import projects from "./hardcode";
import "./style.css";

(function () {
  let data = JSON.parse(localStorage.getItem("data"));
  let todolist = data ? new TodoList(data, 0) : new TodoList(projects, 0);
  todolist.renderTodos();
  todolist.renderForm();

  let projectlist = data ? new ProjectList(data, 0) : new ProjectList(projects);
  projectlist.renderProjects();
  projectlist.renderForm();
})();
