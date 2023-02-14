/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', addLocalStorage);

function addLocalStorage(event) {
  var dataJson = JSON.stringify(data);
  var dataLocalStorage = localStorage.setItem('javascript-local-storage', dataJson);
  return dataLocalStorage;
}
