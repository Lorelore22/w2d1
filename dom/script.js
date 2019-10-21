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

todoListItems[0].innerText = "change bike tyres";

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
