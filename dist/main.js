(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n.container {\n    display: flex;\n    justify-content: space-evenly;\n}",""]);const c=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],c=0;c<e.length;c++){var d=e[c],a=o.base?d[0]+o.base:d[0],l=i[a]||0,u="".concat(a," ").concat(l);i[a]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var c=n(i[s]);t[c].references--}for(var d=o(e,r),a=0;a<i.length;a++){var l=n(i[a]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},414:(e,t,n)=>{const o=n(407),r=n(555);e.exports=class{constructor(e){this.projectList=document.querySelector(".project__list"),this.projects=e}createProject(e){return{id:(new Date).getTime()*Math.random()*1e5,title:e,todos:[]}}removeProject(e){this.projects=this.projects.filter((t=>t.id!==e)),this.renderProjects()}addProject(){this.projects.push(this.createProject(document.getElementById("title").value))}renderForm(){const e=document.createElement("form"),t=document.createElement("legend"),n=document.createElement("input");r(n,{id:"title",type:"text",placeholder:"project title",required:!0});const o=document.createElement("button");o.innerText="Add project",o.addEventListener("click",(e=>{e.preventDefault(),this.addProject(),this.renderProjects()})),e.append(n,o,t),document.getElementById("project__form-container").replaceChildren(e)}renderProjects(){const e=document.createElement("div");for(let t=0;t<this.projects.length;t++){const n=document.createElement("p");n.innerText=`\n                id: ${this.projects[t].id}\n                title: ${this.projects[t].title}\n                description: ${this.projects[t].description}\n                due: ${this.projects[t].dueDate}               \n            `;const r=document.createElement("button");r.innerText="Delete",e.append(n,r),r.addEventListener("click",(()=>{this.removeProject(this.projects[t].id)})),n.addEventListener("click",(()=>{let e=new o(this.projects,t);e.renderTodos(),e.renderForm()}))}this.projectList.replaceChildren(e)}}},407:(e,t,n)=>{const o=n(555);e.exports=class{constructor(e,t){this.todoList=document.querySelector(".todo__list"),this.todoSubmit=document.querySelector(".todo__submit"),this.todos=e[t].todos,this.project=e[t]}createTodo(e,t,n,o){return{id:(new Date).getTime()*Math.random()*1e5,title:e,description:t,dueDate:n,high_priority:o}}removeTodo(e){this.todos=this.todos.filter((t=>t.id!==e)),this.renderTodos()}addTodo(){this.todos.push(this.createTodo(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("dueDate").value,document.getElementById("highPriority").checked)),console.log(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("dueDate").value,document.getElementById("highPriority").checked)}renderForm(){const e=document.createElement("form"),t=document.createElement("p");t.innerText=this.project.title;const n=document.createElement("input");o(n,{id:"title",type:"text",placeholder:"title",required:!0});const r=document.createElement("input");o(r,{id:"description",type:"text",placeholder:"description"});const i=document.createElement("input");o(i,{id:"dueDate",type:"date",placeholder:"due"});const s=document.createElement("label");s.innerText="high priority",o(s,{for:"highPriority"});const c=document.createElement("input");o(c,{id:"highPriority",type:"checkbox"});const d=document.createElement("button");d.innerText="Add toado",o(s,{type:"button"}),d.addEventListener("click",(e=>{e.preventDefault(),this.addTodo(),this.renderTodos()})),e.append(t,n,r,i,s,c,d),document.getElementById("todo__form-container").replaceChildren(e)}renderTodos(){const e=document.createElement("div");for(let t=0;t<this.todos.length;t++){const n=document.createElement("p");n.innerText=`\n                id: ${this.todos[t].id}\n                title: ${this.todos[t].title}\n                description: ${this.todos[t].description}\n                due: ${this.todos[t].dueDate}\n                high priority: ${this.todos[t].priority}                \n            `;const o=document.createElement("button");o.innerText="Delete",e.append(n,o),o.addEventListener("click",(()=>{this.removeTodo(this.todos[t].id)}))}this.todoList.replaceChildren(e),console.log(this.todos)}}},555:e=>{e.exports=(e,t)=>{Object.keys(t).forEach((n=>{e.setAttribute(n,t[n])}))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=[{id:1,title:"Work",todos:[{id:"Worka1",title:"Write report",description:"Report for Mitsubishi",dueDate:"09/12/2022",priority:"high"},{id:"Work2",title:"Do minutes",description:"Minutes of Monday's meeting",dueDate:"09/11/2022",priority:"low"}]},{id:2,title:"School",todos:[{id:"School1",title:"CS Homework",description:"Algorithms and data structures",dueDate:"09/12/2022",priority:"high"},{id:"School2",title:"Lab report",description:"iGG assays",dueDate:"09/11/2022",priority:"low"}]}];var t=n(379),o=n.n(t),r=n(795),i=n.n(r),s=n(569),c=n.n(s),d=n(565),a=n.n(d),l=n(216),u=n.n(l),p=n(589),m=n.n(p),h=n(426),f={};f.styleTagTransform=m(),f.setAttributes=a(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=n(414),y=n(407);!function(){let t=new y(e,0);t.renderTodos(),t.renderForm();let n=new v(e);n.renderProjects(),n.renderForm()}()})()})();