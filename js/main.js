// References
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var userSurname = prompt('Inserisci il tuo cognome');
var unorderedList = document.getElementById('unorderedList');

// Entry validation
while (userSurname == '') {
    userSurname = prompt('Errore: inserire un cognome');
}

// Adding new entry to array and alphabetical sorting
surnameList.push(userSurname);
surnameList.sort();

// Compiling unordered list for printing
for (var i = 0; i < surnameList.length; i++) {
    var surname = surnameList[i];
    
    var position = surnameList.indexOf(userSurname);
    var previousItem = unorderedList.innerHTML;
    var newItem = '<li>' + surname + '</li>';
    unorderedList.innerHTML = previousItem + newItem;
    document.getElementById('position').innerHTML = 'New surname position is: ' + (position + 1);
}


