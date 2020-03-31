// Srtarting surname list
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(surnameList);

// Ask the user for his surname
var userSurname = prompt('Inserisci il tuo cognome');


// Push user surname into list and print the nrw array items alphabetically
surnameList.push(userSurname);
console.log(surnameList.sort());
console.log(surnameList.indexOf('Smilzo'));