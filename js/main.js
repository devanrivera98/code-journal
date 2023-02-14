var $input = document.querySelector('input[name=photo');
var $img = document.querySelector('img');

$input.addEventListener('input', setImage);

function setImage(event) {
  $img.src = $input.value;
}
