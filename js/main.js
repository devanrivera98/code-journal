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
