var $photoUrl = document.querySelector('input[name=photo]');
var $img = document.querySelector('img');

$photoUrl.addEventListener('input', setImage);

function setImage(event) {
  $img.src = $photoUrl.value;
}

// console.log(data.nextEntryId);
// console.log(data.entries);
var $form = document.querySelector('form');
// console.log($form);
var $title = document.querySelector('input[name=title]');
var $notes = document.querySelector('textarea');
// individually query select all three
$form.addEventListener('submit', setSubmit);

function setSubmit(event) {
  event.preventDefault();
  var object = {
    title: $title.value,
    url: $photoUrl.value,
    notes: $notes.value,
    entryId: 1
  };
  data.nextEntryId++;
  // console.log(data.nextEntryId);
  data.entries.unshift(object);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}
