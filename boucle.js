// tableau random
let randomnumeros = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let btnrandom = document.getElementById("lancerResult")
const bru = document.getElementById("numberRandom");
const message = document.getElementById("message");

btnrandom.addEventListener("click", () => {
  bru.innerText = "";                        // POUR CLEAN 
  talk.innerText = "";
  nbvalid.innerText = "";
  message.innerText = ""
  TabChoix = []
  win = []
  randomnumeros = [];
  while (randomnumeros.length < 5) {
    let random = getRandomInt(50);

    if (randomnumeros.includes(random)) {    // si c'est vrai qu'il y a deux numeros identiques alors il fait l'alerte
      alert("meme numero")
    }
    if (randomnumeros.includes(random) === false) { // si pas identique alors il push dans le tableau random
      randomnumeros.push(random);
    }
  }
  if (randomnumeros.length == 5) {                     // quand il atteint la taille de 5 il arrete sa boucle 
    setTimeout(() => {
      bru.innerHTML += "" + randomnumeros[0]            // va mettre un peu de temps a afficher le premier numero tiré 
    }, 5);
    setTimeout(() => {
      bru.innerHTML += "////" + randomnumeros[1]
    }, 500);
    setTimeout(() => {
      bru.innerHTML += "////" + randomnumeros[2]
    }, 1000);
    setTimeout(() => {
      bru.innerHTML += "////" + randomnumeros[3]
    }, 1500);
    setTimeout(() => {
      bru.innerHTML += "////" + randomnumeros[4]
    }, 2000);
    setTimeout(() => {
      // push des a pour pouvoir afficher un score 
      for (let i = 0; i < randomnumeros.length; i++) {

        if (TabChoix.includes(randomnumeros[i])) {   // il va prendre un randomnumero et regarder dans tablchoix si il trouve la meme valeur
          win.push(randomnumeros[i])  // si oui il push puis continue si non il continue 
          console.log("test")
        }
      }
      message.innerHTML = win.length + "/5"      // imprime le score /5 grace a la taille du tableau de comparaison
      // tentative afficher un message en fonction du score
      if (win.length === 1) {
        console.log(win)
        talk.innerHTML = "c'est deja bien "
        console.log("deja bien")
      }

      if (win.length === 2) {
        talk.innerHTML = "un peu mieux "
      }
      if (win.length === 3) {
        talk.innerHTML = "on commence a avoir de la chance"
      }
      if (win.length === 4) {
        talk.innerHTML = "si proche du perfect"
      }
      if (win.length === 5) {
        talk.innerHTML = "CHAMPION"
      }
      if (win.length === 0) {
        talk.innerHTML = "Nul"
      }

      // fin de tentative //

    }, 3000);
  }
})
const talk = document.getElementById("talk"); // selection h3
let win = []  // tableau qui recupere les bons numeros

// tableau des choix


let numeroUn = document.getElementById("number1")      // faire correspondre l'input a sa variable
let numeroDeux = document.getElementById("number2")
let numeroTrois = document.getElementById("number3")
let numeroQuatre = document.getElementById("number4")
let numeroCinq = document.getElementById("number5")

let TabChoix = []   // rassemblera les numeros dans ce tableau
let nbvalid = document.getElementById("numberValid") // le paragraphe ou il doit afficher le choix
let choix = document.getElementById("btnchoix") // le btn qui doit lancer laffichage

choix.addEventListener("click", (e) => {
  e.preventDefault();                       // empeche l'actualisation du formulaire
  bru.innerText = "";                        // POUR CLEAN 
  talk.innerText = "";
  nbvalid.innerText = "";
  message.innerText = ""
  TabChoix = []
  win = []
  randomnumeros = [];                       // pour clean le tableau en cas de relance 
  TabChoix.push(parseInt(numeroUn.value), parseInt(numeroDeux.value), parseInt(numeroTrois.value),
    parseInt(numeroQuatre.value), parseInt(numeroCinq.value)) //permet de push dans le tableau vide des value et le convertir en nombre

  // va regarder chaque numeros
  TabChoix.map((verif) => {
    if (verif <= 0 || verif > 50) {
      alert("numero invalide, rentrez des numeros entre 0 et 50 si vous souhaitez avoir toute vos chances");
      TabChoix = []
      return;
    } else {
      nbvalid.innerText = "Vos choix" + TabChoix;   // affiche le choix des joueurs
    }
  })
})

