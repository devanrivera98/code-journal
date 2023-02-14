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
  var $divOne = document.createElement('div');
  $divOne.setAttribute('class', 'row');

  var $divTwo = document.createElement('div');
  $divTwo.setAttribute('class', 'row column-half');

  var $img = document.createElement('img');
  $img.setAttribute('class', data.entries.url);

  var $divThree = document.createElement('div');
  $divThree.setAttribute('class', 'column-half');

  var $ul = document.createElement('ul');

  var $liOne = document.createElement('li');
  $liOne.setAttribute('class', 'li-h1');

  var $h2 = document.createElement('h2');
  $h2.textContent = data.entries.title;

  var $liTwo = document.createElement('li');
  $liTwo.setAttribute('class', 'li-text');
  $liTwo.textContent = data.entries.notes;

  $divOne.appendChild($divTwo);
  $divTwo.appendChild($img);
  $divOne.appendChild($divThree);
  $divThree.appendChild($ul);
  $ul.appendChild($liOne);
  $liOne.appendChild($h2);
  $ul.appendChild($liTwo);

  return $divOne;
}
renderEntry();
// entry parameter represents a single object for a single entry from the data.entries array.
