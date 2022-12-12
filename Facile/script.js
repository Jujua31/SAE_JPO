// Questions will be asked
const Questions = [{
  id: 0,
  q: "x=5.15\n\nQuel type de variable est x ?",
  a: [{ text: "int", isCorrect: false },
      { text: "float", isCorrect: true },
      { text: "decimal", isCorrect: false },
      { text: "str", isCorrect: false }
  ]

},
{
  id: 1,
  q: "y=False\n\nQuel type de variable est y ?",
  a: [{ text: "bool", isCorrect: true},
      { text: "boule", isCorrect: false },
      { text: "float", isCorrect: false },
      { text: "flop", isCorrect: false }
  ]

},
{
  id: 2,
  q: "z='z'\n\nQuel type de variable est z ?",
  a: [{ text: "int", isCorrect: false },
      { text: "float", isCorrect: false },
      { text: "str", isCorrect: true },
      { text: "bool", isCorrect: false }
  ]

},
{
  id: 3,
  q: "a=5.0\n\nQuel type de variable est a ?",
  a: [{ text: "int", isCorrect: false },
      { text: "float", isCorrect: true },
      { text: "str", isCorrect: false },
      { text: "bool", isCorrect: false }
  ]

},
{
  id: 4,
  q: "Que renvoie 10-3 ?",
  a: [{ text: "'10-3'", isCorrect: false },
      { text: "'7'", isCorrect: false },
      { text: "10-3", isCorrect: false },
      { text: "7", isCorrect: true }
  ]

},
{
  id: 5,
  q: "Que renvoie 5*5 ?",
  a: [{ text: "25", isCorrect: true },
      { text: "'55555'", isCorrect: false },
      { text: "'25'", isCorrect: false },
      { text: "55555", isCorrect: false }
  ]

},
{
  id: 6,
  q: "Que renvoie 10>12 ?",
  a: [{ text: "10", isCorrect: false },
      { text: "False", isCorrect: true },
      { text: "Erreur", isCorrect: false },
      { text: "12", isCorrect: false }
  ]

},
{
  id: 7,
  q: "Que renvoie 2*'pa' ?",
  a: [{ text: "papa", isCorrect: false },
      { text: "Erreur", isCorrect: false },
      { text: "'papa'", isCorrect: true },
      { text: "'pa pa'", isCorrect: false }
  ]

},
{
  id: 8,
  q: "Que renvoie 3*'3' ?",
  a: [{ text: "9", isCorrect: false },
      { text: "'9'", isCorrect: false },
      { text: "27", isCorrect: false },
      { text: "'333'", isCorrect: true }
  ]

},
{
  id: 9,
  q: "Que renvoie 0==0 ?",
  a: [{ text: "Erreur", isCorrect: false },
      { text: "'0==0'", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "True", isCorrect: true }
  ]

},
{
  id: 10,
  q: "Que renvoie 12>=12 ?",
  a: [{ text: "True", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "'True'", isCorrect: false },
      { text: "False", isCorrect: false }
  ]

},
{
  id: 11,
  q: "Que renvoie 10/5 ?",
  a: [{ text: "2.0", isCorrect: true },
      { text: "2", isCorrect: false },
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: false }
  ]

},
{
  id: 12,
  q: "Comment créer une variable a et lui attribuer la valeur 18 ?",
  a: [{ text: "'a'=18", isCorrect: false },
      { text: "a=18", isCorrect: true },
      { text: "a==18", isCorrect: false },
      { text: "a='18'", isCorrect: false }
  ]

},
{
  id: 13,
  q: "Combien vaut c dans le programme suivant ? :\n\n\na=3\nb=8\nc=a+b",
  a: [{ text: "None", isCorrect: false },
      { text: "'a+b'", isCorrect: false },
      { text: "11.0", isCorrect: false },
      { text: "11", isCorrect: true }
  ]

},
{
  id: 14,
  q: " Que vaut b à la fin dans le programme suivant ? :\n\n\na=5\nb=4\nc=a+b\nb=c+a",
  a: [{ text: "False", isCorrect: false },
      { text: "14", isCorrect: true },
      { text: "9", isCorrect: false },
      { text: "13", isCorrect: false }
  ]

}
]

// Set start
var start = true;
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
var bonnerep = 0;
var mauvaisrep = 0;

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
  op1.style.backgroundColor = "darkmagenta";
  op2.style.backgroundColor = "mediumorchid";
  op3.style.backgroundColor = "mediumorchid";
  op4.style.backgroundColor = "mediumorchid";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "mediumorchid";
  op2.style.backgroundColor = "darkmagenta";
  op3.style.backgroundColor = "mediumorchid";
  op4.style.backgroundColor = "mediumorchid";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "mediumorchid";
  op2.style.backgroundColor = "mediumorchid";
  op3.style.backgroundColor = "darkmagenta";
  op4.style.backgroundColor = "mediumorchid";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "mediumorchid";
  op2.style.backgroundColor = "mediumorchid";
  op3.style.backgroundColor = "mediumorchid";
  op4.style.backgroundColor = "darkmagenta";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
      result[0].innerHTML = "Bonne Réponse !";
      result[0].style.color = "green";
  } else {
      result[0].innerHTML = "Mauvaise Réponse !";
      result[0].style.color = "red";
  }
  evaluatebutton = true;
})

next.addEventListener("click", () => {
  if (evaluatebutton == true)  {
    start = false;
    if (id < 13) {
      id++;
      iterate(id);
      console.log(id);
      op1.style.backgroundColor = "mediumorchid";
      op2.style.backgroundColor = "mediumorchid";
      op3.style.backgroundColor = "mediumorchid";
      op4.style.backgroundColor = "mediumorchid";
      if (selected == "true"){
        bonnerep++;
      } else {
        mauvaisrep++;
      }
      selected = "";
      evaluatebutton = false;
    } else if (id < 14) {
      next.innerText = "Finir le Test";
      id++;
      iterate(id);
      console.log(id);
      op1.style.backgroundColor = "mediumorchid";
      op2.style.backgroundColor = "mediumorchid";
      op3.style.backgroundColor = "mediumorchid";
      op4.style.backgroundColor = "mediumorchid";
      if (selected == "true"){
        bonnerep++;
      } else {
        mauvaisrep++;
      }
      selected = "";
      evaluatebutton = false;
    } else {
      alert('Vous avez obtenu un résultat de '+ bonnerep +"/"+ (bonnerep+mauvaisrep));
      window.location.replace("../accueil.html"); 
    }
    
  }
})
}

if (start) {
iterate("0");
}

