/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let numberVariable = 2
let stringVariable = "Sono una stringa di testo, ovvero una sequenza di caratteri. Posso contenere lettere, spazi, numeri e la maggior parte dei simboli. Diciamo che, come valeva su HTML, per casi speciali, devo giusto adottare qualche accortezza (per esempio per scrivere le virgolette, uso un backslash, cosi \") "
let booleanVariable = true
let undefinedVariable 
let nullVariable = null

/* Spiegazione
Esistono cinque tipi di dati base:
1. Quelli numerici (i.e. numberVariable), possono contenere numeri (interi e decimali)
2. Quelli cosidetti stringa, che contengono caratteri. Per scrivere questi caratteri è
   necessario usare le virgolette (vanno bene sia singole o doppie, l'importante è usare
   lo stesso tipo sia all'inizio che alla fine). Un carattere può essere praticamente 
   qualsiasi cosa, anche un numero. Però i numeri scritti tra virgolette sono considerati
   come un qualsiasi altro carattere, al pari per esempio di una lettera, una virgola, uno spazio.
   E' importante ricordarselo, perché la macchina tratta numeri e stringhe in maniera 
   molto diversa, e quando le do istruzioni logiche, ottengo risultati diversi se lavoro
   con numeri o stringhe.
3. Quelli cosiddetti booleani, dal nome del matematico G. Boole che ha definito diciamo
   i criteri di questa parte della matematica. Questo tipo di dati può assumere solo
   due valori (vero o falso).
4. Quelli non definiti (undefined). I dati sono non definiti quando si dice che esiste 
   un contenitore ma non si dice cosa contiene.
5. Il cosidetto 'null'. Questo tipo di dato è come dire il vuoto totale. Non è la stessa
   cosa che non definire cosa c'è nel contenitore. In questo caso si dice cosa c'è, e
   ciò che è contenuto è precisamente il 'nulla'.

/* In JavaScript esistono 5 tipi di dati base: i numeri, le stringhe, i booleani, gli undefined e i null */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Giulia'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// Utilizzando le variabili per memorizzare i valore 12 e 20

let firstNumber = 12
let secondNumber = 20
let sum = firstNumber + secondNumber

// Utilizzando le costanti per memorizzare i valori 12 e 20

const firstConstNumber = 12
const secondConstNumber = 20
let constSum = firstConstNumber + secondConstNumber

console.log('La somma di due variabili i cui valori sono rispettivamente 12 e 20 è di', sum)
console.log('La somma di due costanti i cui valori sono rispettivamente 12 e 20 è anch`essa di', constSum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//const name = Orlando
//Non si può ridichiarare 'name'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

subResult = 4 - x 
console.log('Se x = 12, 4 - x =', subResult)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log('Le variabili name1 e name2 sono diverse?', name1 !== name2)
console.log('Ora le variabili name1 e name2 sono uguali?', name1 === name2.toLowerCase())