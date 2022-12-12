// Questions will be asked
const Questions = [{
  id: 0,
  q: "Quesl mot-clé utiliser pour définir une fonction",
  a: [{ text: "definir", isCorrect: false },
      { text: "def", isCorrect: true },
      { text: "fonction", isCorrect: false },
      { text: "start", isCorrect: false }
  ]

},
{
  id: 1,
  q: "Que retourne le programme suivant : a = () / a.append(1) ?",
  a: [{ text: "Erreur", isCorrect: true, isSelected: false },
      { text: "1", isCorrect: false },
      { text: "(1)", isCorrect: false },
      { text: "()", isCorrect: false }
  ]

},
{
  id: 2,
  q: "Comment retourner une variable à la fin d'une fonction ?",
  a: [{ text: "retourner", isCorrect: false },
      { text: "give", isCorrect: false },
      { text: "end", isCorrect: false },
      { text: "return", isCorrect: true }
  ]

},
{
  id: 3,
  q: "Comment ajouter i = 2 à compteur déjà égal à 5 ?",
  a: [{ text: "compteur + i", isCorrect: false },
      { text: "compteur = compteur + i", isCorrect: true },
      { text: "compteur = i", isCorrect: false },
      { text: "i = compteur", isCorrect: false }
  ]

},
{
  id: 4,
  q: "Quel mot-clé utiliser pour ajouter une valeur à une liste ?",
  a: [{ text: "remove", isCorrect: false },
      { text: "add", isCorrect: false },
      { text: "append", isCorrect: true },
      { text: "+", isCorrect: false }
  ]

},
{
  id: 5,
  q: "Comment modifier la valeur 1 dans le tuple (1,2) en 3 ?",
  a: [{ text: "tuple[0] = 3", isCorrect: true },
      { text: "tuple[0][3]", isCorrect: false },
      { text: "tuple[1] = 3", isCorrect: false },
      { text: "tuple['3']", isCorrect: false }
  ]

},
{
  id: 6,
  q: "De quel type est le tuple ?",
  a: [{ text: "non-mutable", isCorrect: true },
      { text: "unmute", isCorrect: false },
      { text: "mutable", isCorrect: false },
      { text: "mute", isCorrect: false }
  ]

},
{
  id: 7,
  q: "De quel type est la liste ?",
  a: [{ text: "mutable", isCorrect: true },
      { text: "mutant", isCorrect: false },
      { text: "non-mutable", isCorrect: false },
      { text: "unmute", isCorrect: false }
  ]

},
{
  id: 8,
  q: "Comment définir une liste ?",
  a: [{ text: "liste = ()", isCorrect: false },
      { text: "liste = []", isCorrect: true },
      { text: "liste = ''", isCorrect: false },
      { text: "liste = 0", isCorrect: false }
  ]

},
{
  id: 9,
  q: "Comment connaître la taille d'une chaine de caractères ?",
  a: [{ text: "taille(mot)", isCorrect: false },
      { text: "size(mot)", isCorrect: false },
      { text: "len(mot)", isCorrect: true },
      { text: "length(mot)", isCorrect: false }
  ]

},
{
  id: 10,
  q: "Comment accéder à la valeur 5 dans la liste [1,5,7,9] ?",
  a: [{ text: "liste[1]", isCorrect: true },
      { text: "liste[5]", isCorrect: false },
      { text: "liste[2]", isCorrect: false },
      { text: "liste['5']", isCorrect: false }
  ]

},
{
  id: 11,
  q: "Comment accéder à la valeur d'indice 2 dans le tuple (2,9,4) ?",
  a: [{ text: "tuple['4']", isCorrect: false },
      { text: "tuple[2]", isCorrect: false },
      { text: "tuple[1]", isCorrect: true },
      { text: "tuple[4]", isCorrect: false }
  ]

}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
      result[0].innerHTML = "Réponse Vraie ! ";
      result[0].style.color = "green";
  } else {
      result[0].innerHTML = "Réponse Fausse";
      result[0].style.color = "red";
  }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 9) {
  id++;
  iterate(id);
  console.log(id);
}

})
