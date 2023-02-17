var $photoUrl = document.querySelector('input[name=photo]');
var $img = document.querySelector('img');
var $title = document.querySelector('.input-field');
var $textArea = document.querySelector('textarea');

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
  if (data.editing === null) {
    data.nextEntryId++;
    data.entries.unshift($object);
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $ul.prepend(renderEntry($object));
    toggleNoEntries();
  } else {
    $object.entryId = data.editing.entryId;
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === $object.entryId) {
        data.entries.splice(i, 1, $object);
      }
    }
    var $liAll = document.querySelectorAll('li');
    for (var j = 0; j < $liAll.length; j++) {
      if (Number($liAll[j].dataset.entryId) === $object.entryId) {
        $liAll[j].replaceWith(renderEntry($object));
      }
    }
  }
  viewSwap('entries');
  $form.reset();
  var $H1 = document.querySelector('h1');
  $H1.textContent = 'New Entry';
  data.editing = null;
}

function renderEntry(entry) {
  var $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);

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

  var $pencil = document.createElement('i');
  $pencil.setAttribute('class', 'fas fa-pencil');

  var $paragraph = document.createElement('p');
  $paragraph.setAttribute('class', 'p-text');
  $paragraph.textContent = entry.notes;

  $li.appendChild($divOne);
  $divOne.appendChild($divTwo);
  $divTwo.appendChild($image);
  $divOne.appendChild($divThree);
  $divThree.appendChild($h2);
  $h2.appendChild($pencil);
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

$ul.addEventListener('click', ifPencilClicked);

function ifPencilClicked(event) {
  viewSwap('entry-form');
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId.toString() === event.target.closest('li').getAttribute('data-entry-id')) {
      data.editing = data.entries[i];
      var $headerH1 = document.querySelector('h1');
      $headerH1.textContent = 'Edit Entry';
      var $button = document.querySelector('button');
      $button.classList.remove('hidden');
      $img.setAttribute('src', data.editing.url);
      $title.value = data.editing.title;
      $photoUrl.value = data.editing.url;
      $textArea.value = data.editing.notes;
    }
  }
}
