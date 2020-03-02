$(document).ready(function() {
  // Handlebars setup
  let source = $('#todo__handlebars').html(); // 1. Define handlebars source
  let template = Handlebars.compile(source); // 2. Make the template
  ///

  // Define variables
  let todoList = $('#todo__list');     // <ul>
  let todoItem = $('.todo__handlebars--item');     // <li>
  let todoButton = $('#todo__button'); // `Create` button
  let todoInput = $('#todo__input');   // Text input field

// Adding to list function
  function addToList(whichList, todoItemParam) {
    let newTodo = {"todoItem": todoItemParam}
    whichList.append(template(newTodo));
  }

// Run this function when
  function addCompleteLink(whichItem) {
    // The complete task object
    let completedLink = $('<span>').html('Complete task').addClass('complete-task');

    // Append link to `this` <li>
    whichItem.append(completedLink);

    // Click listener to mark `this` item complete
    completedLink.on('click', function(e) {
      if ( $(this).parent().hasClass('todo__item--completed') ) { // If, completed
        $(this).parent().removeClass('todo__item--completed');    // Remove completed class
      } else {
        $(this).parent().addClass('todo__item--completed');       // Else, add it
      }
    });
  }

  // Button click listener
  todoButton.on('click', function(e) {
    e.preventDefault();

    let newTodoItem = todoInput.val();          // Get value from input field

    if (newTodoItem === '') {
      alert('Nothing to do???'); // Alert if empty
    } else {
      addToList(todoList, newTodoItem);         // Run the addfunction with input value
      todoInput.val('');                        // Empty the input field
      let $lastLi = todoList.children().last();
      addCompleteLink($lastLi);
    }
  });
});
