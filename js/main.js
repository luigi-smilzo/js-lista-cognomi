// Srtarting surname list
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(surnameList);

// Ask the user for his surname
var userSurname = prompt('Inserisci il tuo cognome');


// Push user surname into list and print the new array items alphabetically
surnameList.push(userSurname);
console.log(surnameList.sort());

// Check the new array item position and print
console.log(surnameList.indexOf('Smilzo'));

var unorderedList = document.getElementById('unorderedList');


for (var i = 0; i < surnameList.length; i++) {
    var surname = surnameList[i];
    
    var previousItem = unorderedList.innerHTML;
    var newItem = '<li>' + surname + '</li>';
    unorderedList.innerHTML = previousItem + newItem;
}