var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var userSurname = prompt('Inserisci il tuo cognome');


surnameList.push(userSurname);
surnameList.sort();

var position = surnameList.indexOf(userSurname);

var unorderedList = document.getElementById('unorderedList');

for (var i = 0; i < surnameList.length; i++) {
    var surname = surnameList[i];
    
    var previousItem = unorderedList.innerHTML;
    var newItem = '<li>' + surname + '</li>';
    unorderedList.innerHTML = previousItem + newItem;
}

document.getElementById('position').innerHTML = 'New surname position is: ' + (position + 1);
