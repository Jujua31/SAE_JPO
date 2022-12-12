// Questions will be asked
const Questions = [{
  id: 0,
  q: "liste = [2,4,1,8]\nfor elt in liste: \n____print('SUS')\n\nCombien de fois la boucle 'for' s'exécute ?",
  a: [{ text: "8", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "1", isCorrect: false }
  ]

},
{
  id: 1,
  q: "liste = [1,2,3,4]\nfor elt in liste:\n____res = res + elt\n\nCombien vaut res après l'exécution de ce code ?",
  a: [{ text: "4", isCorrect: false, isSelected: false },
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "10", isCorrect: true }
  ]

},
{
  id: 2,
  q: "i = 0\nwhile i < 3:\n____print(i)\n____i = i + 1\n\nQue vaut i a la fin de la boucle ?",
  a: [{ text: "2", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "3", isCorrect: true },
      { text: "La boucle ne s'arrête jamais", isCorrect: false }
  ]

},
{
  id: 3,
  q: "liste = [2,1,4,8]\nfor i in range(len(liste)):\n____print('sussy baka')\n\nQue vaut i après l'exécution de ce code ?",
  a: [{ text: "0", isCorrect: false },
      { text: "8", isCorrect: false },
      { text: "3", isCorrect: true },
      { text: "4", isCorrect: false }
  ]

},
{
  id: 4,
  q: "liste = []\nfor i in range(3):\n____liste.append(i)\n\nQue contient la liste res après l'exécution de ce code ?",
  a: [{ text: "[]", isCorrect: false },
      { text: "[1,2,3]", isCorrect: false },
      { text: "[3]", isCorrect: false },
      { text: "[0,1,2]", isCorrect: true }
  ]

},
{
  id: 5,
  q: "liste = [1,2,3,4]\nres = []\nfor elt in liste:\n____res.append(elt+1)\n\nQue contient la liste res après l'exécution de ce code ?",
  a: [{ text: "[]", isCorrect: false },
      { text: "[1,2,3,4]", isCorrect: false },
      { text: "[2,3,4,5]", isCorrect: true },
      { text: "[5,6,7,8]", isCorrect: false }
  ]

},
{
  id: 6,
  q: "for i in range(1):\n____if i == 1:\n________print(1)\n____else:\n________print(“perdu”)\n\nQu’affichera la boucle suivante ?",
  a: [{ text: "rien", isCorrect: false },
      { text: "'perdu'", isCorrect: true },
      { text: "erreur", isCorrect: false },
      { text: "1", isCorrect: false }
  ]

},
{
  id: 7,
  q: "res=0\nliste=[2,8,7,5]\nfor i in range(len(liste)):\n____res.append(liste[i])\n\nQue vaut res après l’exécution de ce code ?",
  a: [{ text: "Error", isCorrect: true },
      { text: "6", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "22", isCorrect: false }
  ]

},
{
  id: 8,
  q: "tuple=(1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5)\ni=0\nwhile i < len(tuple):\n____tuple.append(i)\n____i+=1\n\nCombien d'éléments contient le tuple après l’exécution de ce code?",
  a: [{ text: "35", isCorrect: true },
      { text: "70", isCorrect: false },
      { text: "Error", isCorrect: false },
      { text: "69", isCorrect: false }
  ]

},
{
  id: 9,
  q: "liste=[3,4,9,2,3,1]\nres=0 \nfor elt in liste:\n_____if elt > 3:\n________res+=2\n\nCombien vaut res après l’exécution de ce code ?",
  a: [{ text: "0", isCorrect: false },
      { text: "8", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "Error", isCorrect: false }
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
    if (id < 8) {
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
    } else if (id < 9) {
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
