/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let number1 = 15
let number2 = 24

if (number1 > number2) {
  console.log(number1)
} else { console.log(number2) }

/* let number1 = 13
let number2 = 25

if(number1>number2){
  console.log (number1)
}else{console.log(number2)}

Correzione: manca la parte in cui i numeri sono uguali.

if (number1 > number2) {
  console.log(number1)
} else if(number1==number2){
  console.log(I numeri sono uguali)
  } else { console.log(number2) }


 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const not5 = (number1 !== 5) ? 'not equal' : 'equal'
console.log(not5)

/* const not5 = (number1 !=5)?'not equal':'equal'
console.log (not5) */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (number1 % 5 == 0) {
  console.log('divisibile per 5')
} else { console.log('non divisibile per 5') }

/* if(number1 % 5 == 0) {
  console.log('divisibile per 5')
}else{console.log('non divisibile per 5')} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (number1== 8 || number2 == 8) {
  console.log('almeno un numero è 8')
} else if (number1 + number2 == 8 || number1 - number2 == 8 || number2 - number1 == 8) { 
  console.log('la somma/sottrazione dei numeri è uguale a 8') 
} else { console.log('questi numeri l\'8 non lo vedono neanche in cartolina')}


/* if (number1== 8 || number2 == 8) {
  console.log('almeno un numero è 8')
} else if (number1 + number2 == 8 || number1 - number2 == 8 || number2 - number1 == 8) { 
  console.log('la somma/sottrazione dei numeri è uguale a 8') 
} else { console.log('questi numeri l\'8 non lo vedono neanche in cartolina')} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80
let shipping= 10

if (totalShoppingCart>50) {
  totalShoppingCart = totalShoppingCart  
}else{ totalShoppingCart += shipping 
  }

console.log('Checkout',totalShoppingCart)

/* let totalShoppingCart = 33
let shipping= 11

if (totalShoppingCart>50) {
  totalShoppingCart = totalShoppingCart  
}else{ totalShoppingCart += shipping 
  } */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = 0.2
totalShoppingCart = totalShoppingCart - totalShoppingCart * blackFriday

console.log('prezzo scontato', totalShoppingCart)

if (totalShoppingCart>50) {
  totalShoppingCart = totalShoppingCart  
}else{ totalShoppingCart += shipping 
  }

console.log('Checkout dopo il blackFriday',totalShoppingCart)

/* let blackFriday = 0.2
totalShoppingCart= totalShoppingCart - totalShoppingCart * blackFriday

console.log(totalShoppingCart)
if (totalShoppingCart>50) {
  totalShoppingCart = totalShoppingCart  
}else{ totalShoppingCart += shipping 
  }
  
console.log(totalShoppingCart) */



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 7
let n2 = 9
let n3 = 10

if(n1>n2&&n2>n3){
  console.log(n1,n2,n3)
} else if (n1>n3&&n3>n2) {
  console.log(n1,n3,n2)
}else if (n2>n3&&n3>n1) {
  console.log(n2,n3,n1)
}else if (n2>n1&&n1>n3) {
  console.log(n2,n1,n3)
}else if (n3>n1&&n1>n2) {
  console.log(n3,n1,n2)
} else {console.log(n3,n2,n1)}



/* let n1 = 7
let n2 = 8
let n3 = 6

if(n1>n2&&n2>n3){
  console.log(n1+' '+n2+' '+n3)
} else if (n1>n3&&n3>n2) {
  console.log(n1+' '+n3+' '+n2)
}else if (n2>n3&&n3>n1) {
  console.log(n2+' '+n3+' '+n1)
}else if (n2>n1&&n1>n3) {
  console.log(n2+' '+n1+' '+n3)
}else if (n3>n1&&n1>n2) {
  console.log(n3+' '+n1+' '+n2)
} else {console.log(n3+' '+n2+' '+n1)}

Correzione: per ottimizzarlo si sarebbero potuto concatenare gli if e mettere gli "=" insieme agli operatori di comparazione


 */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let prova = 4;

console.log(typeof prova)

/* 
let prova = 3

console.log(typeof prova)

Correzione

if (typeof(prova) === number){
console.log ('number')}
else {console.log('not number)}

*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if(prova % 2 ==0){
  console.log ('è pari')
}else{console.log ('è dispari')}



/* if(prova % 2 ==0 ){
  console.log ('è pari')
}else{console.log ('è dispari')} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

  //oppure//

  let value = 3
  if (value >6 && value < 10) {
      console.log("Meno di 10");
    } else if (value < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

  oppure

  let value = 3
  if (value > 6 && value < 10) {
      console.log("Meno di 10");
    } else if (value < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    } */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'; 
console.log (me)

/* me.city = 'Toronto'; 
console.log (me) */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.name
console.log (me)

/* delete me.name*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]
console.log (me)

/* delete me.skills[2]

*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbers = []
numbers[0]=1
numbers[1]=2
numbers[1]=1
numbers[2]=3
numbers[3]=4
numbers[4]=5
numbers[5]=6
numbers[6]=7
numbers[7]=8
numbers[8]=9
numbers[9]=10
console.log (numbers)

/* const numbers = []
numbers[0]=1
numbers[1]=2
numbers[1]=1
numbers[2]=3
numbers[3]=4
numbers[4]=5
numbers[5]=6
numbers[6]=7
numbers[7]=8
numbers[8]=9
numbers[9]=10
console.log (numbers)*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numbers[9]=100
console.log (numbers)
/* numbers[9]=100
console.log (numbers) */
