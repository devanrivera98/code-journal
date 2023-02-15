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
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift($object);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  $ul.appendChild(renderEntry($object));
  viewSwap('entries');
  toggleNoEntries();

}

function renderEntry(entry) {
  var $li = document.createElement('li');

  var $divOne = document.createElement('div');
  $divOne.setAttribute('class', 'row');

  var $divTwo = document.createElement('div');
  $divTwo.setAttribute('class', 'row column-half');

  var $image = document.createElement('img');
  $image.setAttribute('src', entry.url);

  var $divThree = document.createElement('div');
  $divThree.setAttribute('class', 'column-half notes');

  var $h2 = document.createElement('h2');
  $h2.setAttribute('class', 'ul-h2');
  $h2.textContent = entry.title;

  var $paragraph = document.createElement('p');
  $paragraph.setAttribute('class', 'p-text');
  $paragraph.textContent = entry.notes;

  $li.appendChild($divOne);
  $divOne.appendChild($divTwo);
  $divTwo.appendChild($image);
  $divOne.appendChild($divThree);
  $divThree.appendChild($h2);
  $divThree.appendChild($paragraph);

  return $li;
}

document.addEventListener('DOMContentLoaded', domContentLoadedFunction);

var $ul = document.querySelector('ul');

function domContentLoadedFunction() {
  for (var i = 0; i < data.entries.length; i++) {
    var results = renderEntry(data.entries[i]);
    $ul.appendChild(results);
  }
  viewSwap(data.view);
  toggleNoEntries();
}

function toggleNoEntries() {
  var $noEntries = document.querySelector('.no-entries-li');
  if (data.entries.length >= 1) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}

function viewSwap(name) {
  var $entryForm = document.querySelector('[data-view="entry-form"]');
  var $entries = document.querySelector('[data-view="entries"]');
  if (name === 'entry-form') {
    $entryForm.classList.remove('hidden');
    $entries.classList.add('hidden');
  } else {
    $entryForm.classList.add('hidden');
    $entries.classList.remove('hidden');
  }
  data.view = name;
}

var $anchor = document.querySelector('a');
$anchor.addEventListener('click', function () {
  viewSwap('entries');
});

var $anchorTwo = document.querySelector('.anchor-entry');
$anchorTwo.addEventListener('click', function () {
  viewSwap('entry-form');
});
