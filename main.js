// Run this function on button click, with 2 params
//  + $whichList      = Passed to define what object to append to
//  + $todoItemParam  = Stored string of what was entered into the input
function addToList(whichList, todoItemParam) {
  let todoListItem = $('<li>').addClass('todo__item').html(todoItemParam);

  // Run the function to append a `complete task` button
  //  + Param is
  addCompleteLink(todoListItem);
  whichList.append(todoListItem);
}

// Run this function when
function addCompleteLink(li) {
  // The complete task object
  let completedLink = $('<span>').html(' complete task').addClass('complete-task');

  // Append link to `this` <li>
  li.append(completedLink);

  // Click listener to mark `this` item complete
  completedLink.on('click', function(event) {
    completedLink.addClass('todo__item--completed');
    completedLink.html('');
  });
}


$(document).ready(function() {
  let todoList = $('#todo__list');     // <ul>
  let todoItem = $('.todo__item');     // <li>
  let todoButton = $('#todo__button'); // `Create` button
  let todoInput = $('#todo__input');   // Text input field

  // On Load: Create array of the <li>'s, and add complete link to each
  todoItem.toArray().forEach(function(li) {
    addCompleteLink ($(li) );
  });

  // Button click listener
  todoButton.on('click', function(event) {
    event.preventDefault();

    // Value in the text input field
    let newTodoItem = todoInput.val();

    // If empty: Alert
    if (newTodoItem === '') {
      console.log('You must type in a value!');
      // alert('You must type in a value!');
    } else {
      // Else: Run addToList function, to...
      //  + Identify the list to append to
      //  + Pass the value in the feild
      addToList(todoList, newTodoItem);

      // Clear input field.
      todoInput.val('');
    }
  });




  // // Handlebars
  // // 1. Define handlebars source, and get the HTML from it
  // var source = $('#todo').html();
  // // 2. Tell handlebars to compile within source
  // var template = Handlebars.compile(source);
  // // 3. Add content
  // var helloStatement = {
  //   todoItem: "Dog Bites"
  // };
  // // 4. Create shortcut for next step, not necessary
  // var compiledTemplate = template(helloStatement);
  // // 5. Add to document
  // $('body').append(compiledTemplate);

});
