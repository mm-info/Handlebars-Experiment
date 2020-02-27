function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing);
  addCompleteLink($thingLi);
  $list.append($thingLi);
}

function addCompleteLink($li) {
  var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
  $li.append($completedLink);
  $completedLink.on('click', function(event) {
    $li.addClass('completed');
    $completedLink.html('');
  });
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCompleteLink($(li));
  });

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
});
