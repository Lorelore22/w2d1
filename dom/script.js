// outputs the whole document
console.log(document);

// outputs the body in the document
console.log(document.body);

// console.log(document.body.div); ❌

// targetting an element via its id
const todoList = document.getElementById("todo-list");

// targetting all elements with a given type/tag
const allListItems = document.getElementsByTagName("li");

// targetting all elements with a given type/tag within an element todoList
const todoListItems = todoList.getElementsByTagName("li");

// we can access a specific item in this list
console.log(todoListItems[0]);
// we can access the text contained within that element
console.log(todoListItems[0].innerText); // 'buy apples'

todoListItems[2].innerText = "change bike tyres";

// todoListItems is not an array:
[...todoListItems];
Array.from(todoListItems);

// Change all the content for the list items in `todoListItems` to be upperCased

// for (const item of todoListItems) {
//   item.innerText = item.innerText.toUpperCase();
// }

for (let i = 0; i < todoListItems.length; i++) {
  todoListItems[i].innerText = todoListItems[i].innerText.toUpperCase();
}

// targets all elements where the class has `todo-container`
document.getElementsByClassName("todo-container"); // HTMLCollection [div.todo-container]

// selects all elements that match a CSS selector
document.querySelectorAll(".todo-container");

// select the first element that matches a selector
document.querySelector("#todo-list");
document.querySelector("li");

const firstItem = document.querySelector("#todo-list li");

// firstItem.style.textDecoration = "line-through";
// firstItem.style["background-color"] = "green";

// we can reassign the value for the class attribute
// firstItem.className = "checked";

// or to prevent overwriting class attributes we can use classList.add, remove or toggle
firstItem.classList.add("checked");

firstItem.classList.remove("b");

// checks if a exists -> it does so it's removed
firstItem.classList.toggle("a");
// checks if d exists -> it doesn't so it's added
firstItem.classList.toggle("d");

const newListItem = document.createElement("li"); // the parameter is the tag of the element

newListItem.innerText = "packing bags";

// appendChild appends a child to a selected parent
// todoList.appendChild(newListItem);
// document.querySelector("#todo-list").appendChild(newListItem);
// -------parent---------------------------------item to append
document.getElementById("todo-list").appendChild(newListItem);

const anotherNewListItem = document.createElement("li");
// anotherNewListItem.innerText = "take a <strong>break</strong>"; ❌
anotherNewListItem.innerHTML = "take a <strong>break</strong>";

// parent-------------item to insert------reference item
todoList.insertBefore(anotherNewListItem, newListItem);

function addTodo() {
  const newTodo = document.createElement("li");

  //   const input = document.getElementsByTagName('input')[0]
  const input = document.querySelector("input");

  newTodo.innerText = input.value;

  const parent = document.getElementById("todo-list");

  parent.appendChild(newTodo);

  newTodo.onclick = toggleTodo;
}

document.getElementById("add-todo").onclick = addTodo;

console.log("one time only");
document.querySelectorAll("#todo-list li").forEach(function(item) {
  item.onclick = toggleTodo;
});

// change the style of the clicked element to add the `checked` class to it
// bonus make it toggle on and off

function toggleTodo(event) {
  //   the `event` object is passed as the first parameter describes the click event
  event.currentTarget.classList.toggle("checked");
}
