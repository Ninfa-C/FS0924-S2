/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
document.write('Javascript è un linguaggio di programmazione utile per creare funzioni in grado di rendere un sito/applicazione più dimanica e interattiva. I dati che si possono inserire in tali funzioni possono essere di diverso tipo: stringhe, numeri, boolean, null e undefined. I valori STRINGHE, i quali prevedono la possibilità di inserire caratteri alfanumerici più o meno complessi in base alle nostre esigenze. I valore NUMERICI, come si può intuire dal nome, hanno la funzione di inserire numeri all\'interno delle nostre funzioni. I valori BOOLEAN possono sembrare complessi dato questo nome "strano", ma si riferiscono ai dati che possono assumere valori di vero o falso. Il valore NULL indica, invece, una variabile vuota o con valore sconosciuto. Infine, abbiamo UNDEFINED ovvero i dati a cui non abbiamo ancora assegnato un valore. ')

/* document.write('Javascript è un linguaggio di programmazione utile per creare funzioni in grado di rendere un sito/applicazione più dimanica e interattiva. I dati che si possono inserire in tali funzioni possono essere di diverso tipo: stringhe, numeri, boolean, null e undefined. I valori STRINGHE, i quali prevedono la possibilità di inserire caratteri alfanumerici più o meno complessi in base alle nostre esigenze. I valore NUMERICI, come si può intuire dal nome, hanno la funzione di inserire numeri all\'interno delle nostre funzioni. I valori BOOLEAN possono sembrare complessi dato questo nome "strano", ma si riferiscono ai dati che possono assumere valori di vero o falso. Il valore NULL indica, invece, una variabile vuota o con valore sconosciuto. Infine, abbiamo UNDEFINED ovvero i dati a cui non abbiamo ancora assegnato un valore. ')
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Ninfa'
console.log(myName)

/* let myName='Ninfa'
console.log(myName) */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12
let number2 = 20
let sommaNumeri = number1 + number2
console.log('Somma', number1 + '+' + number2 + '=' + sommaNumeri)

/* let number1 = 12
let number2 = 20
let sommaNumeri= number1 + number2
console.log(number1+'+'+number2+'='+ sommaNumeri) */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* let x = 12 */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName='Carreno' 
console.log(myName)
/* myName='Carreno'  */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let startNumber=4
console.log('Sottrazione', startNumber-x)
/* let startNumber=4
console.log('Sottrazione', startNumber-x) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= 'john'
let name2= 'John'
console.log(name1===name2)

/* 
let name1= 'john'
let name2= 'John'
console.log(name1===name2) 
*/
