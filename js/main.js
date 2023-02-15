var $photoUrl = document.querySelector('input[name=photo]');
var $img = document.querySelector('img');

$photoUrl.addEventListener('input', setImage);

function setImage(event) {
  $img.src = $photoUrl.value;
}

var $form = document.querySelector('form');

$form.addEventListener('submit', setSubmit);

function setSubmit(event) {
  event.preventDefault();
  var $object = {
    title: $form.elements.title.value,
    url: $form.elements.photo.value,
    notes: $form.elements.notes.value,
    entryId: 1
  };
  data.nextEntryId++;
  data.entries.unshift($object);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

function renderEntry(entry) {
  var $li = document.createElement('li');

  var $divOne = document.createElement('div');
  $divOne.setAttribute('class', 'row');

  var $divTwo = document.createElement('div');
  $divTwo.setAttribute('class', 'row column-half');

  var $image = document.createElement('img');
  $image.setAttribute('class', data.entries.url);

  var $divThree = document.createElement('div');
  $divThree.setAttribute('class', 'column-half notes');

  var $h2 = document.createElement('h2');
  $h2.setAttribute('class', 'ul-h2');
  $h2.textContent = data.entries.title;

  var $paragraph = document.createElement('p');
  $paragraph.setAttribute('class', 'p-text');
  $paragraph.textContent = data.entries.notes;

  $li.appendChild($divOne);
  $divOne.appendChild($divTwo);
  $divTwo.appendChild($image);
  $divOne.appendChild($divThree);
  $divThree.appendChild($h2);
  $divThree.appendChild($paragraph);

  return $li;
}
renderEntry();
// entry parameter represents a single object for a single entry from the data.entries array.

// document.addEventListener('DOMContentLoaded', );
