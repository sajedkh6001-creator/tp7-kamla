function nav(id) {
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById(id).classList.add('active');
if (id === "quiz") {
    demarrerMinuteurQuiz();
}
}
const ecran = document.getElementById('ecran');
const histo = document.getElementById('historique');
function add(val) {
ecran.value+=val;
}
function effacer() {
ecran.value="";
}
function calculer() {
try {
let res = eval(ecran.value);
histo.innerHTML = `<li>${ecran.value} = ${res}</li>` + histo.innerHTML;
ecran.value = res;
} catch(e) {
ecran.value = 'Erreur';
}
}



function ajouterTache() {
let input = document.getElementById('tacheInput');
if (input.value.trim() === '') return;
let li = document.createElement('li');
li.innerHTML = `<span onclick="this.style.textDecoration='line-through'">${input.value}</span>
<button onclick="this.parentElement.remove()">X</button>`;
document.getElementById('listeTaches').appendChild(li);
input.value = '';
   mettreAJour();
}

function mettreAJour() {
    let liste = document.getElementById('listeTaches');
    let compteur = liste.children.length;

    document.getElementById('compteur').textContent =
        "Tâches en cours : " + compteur;

    localStorage.setItem('taches', JSON.stringify(liste.innerHTML));
}

function toutSupprimer() {
    document.getElementById('listeTaches').innerHTML = '';
    mettreAJour();
}

function redimensionner(taille) {
document.getElementById('monImage').width = taille;
document.getElementById("y").innerHTML=taille;
}
let grille = [1, 2, 3, 4, 5, 6, 7, 8, ''];
function afficher() {
const plateau = document.getElementById('plateau');
plateau.innerHTML = '';
grille.forEach((val, i) => {
let div = document.createElement('div');
div.className = 'tuile' + (val === '' ? ' vide' : '');
div.textContent = val;
div.onclick = () => jouer(i);
plateau.appendChild(div);
}); }

let coups = 0;

function jouer(i) {
    let vide = grille.indexOf("");
    let memeLigne = Math.floor(i / 3) === Math.floor(vide / 3);
    let voisin = (memeLigne && Math.abs(i - vide) === 1)
                 || Math.abs(i - vide) === 3;

    if (voisin) {
        [grille[i], grille[vide]] = [grille[vide], grille[i]];

        coups++;

        document.getElementById("scoreCoups").textContent =
            "Nombre de coups : " + coups;

        document.getElementById("messageVictoire").textContent = "";

        afficher();
        verifierVictoire();
    }
}

function verifierVictoire() {
    let final = [1, 2, 3, 4, 5, 6, 7, 8, ""];

    if (grille.every((valeur, i) => valeur === final[i])) {
        document.getElementById("messageVictoire").textContent =
            "Bravo ! Victoire en " + coups + " coups !";
    }
}


function melanger() {
    grille.sort(() => Math.random() - 0.5);

    coups = 0;
    document.getElementById("scoreCoups").textContent =
        "Nombre de coups : 0";

    document.getElementById("messageVictoire").textContent = "";

    afficher();
}

afficher(); 

let tempsQuiz = 30;
let timerQuiz = null;
let quizTermine = false;

function demarrerMinuteurQuiz() {
    if (timerQuiz !== null || quizTermine) return;

    timerQuiz = setInterval(function () {
        tempsQuiz--;

        document.getElementById("tempsRestant").textContent =
            "Temps restant : " + tempsQuiz + " secondes";

        if (tempsQuiz <= 0) {
            clearInterval(timerQuiz);
            timerQuiz = null;
            evaluerQuiz();
        }
    }, 1000);
}

function evaluerQuiz() {
    if (quizTermine) return;

    quizTermine = true;

    if (timerQuiz !== null) {
        clearInterval(timerQuiz);
        timerQuiz = null;
    }

    const reponsesCorrectes = {
        q1: "B",
        q2: "A",
        q3: "C",
        q4: "B",
        q5: "A"
    };

    let score = 0;
    let form = document.getElementById("quizForm");

    for (let q in reponsesCorrectes) {
        let option = form.elements[q];

        if (option && option.value === reponsesCorrectes[q]) {
            score++;
        }
    }

    let resultat = document.getElementById("resultatQuiz");

    resultat.innerHTML = "Votre score : " + score + " / 5<br>";

    if (score === 5) {
        resultat.innerHTML +=
            "Excellent ! Maîtrise parfaite de JavaScript !";
    } else if (score >= 3) {
        resultat.innerHTML +=
            "Bon travail ! Quelques notions à réviser.";
    } else {
        resultat.innerHTML +=
            "Continuez vos efforts et révisez les exemples du TP.";
    }

    document.querySelectorAll("#quizForm input").forEach(input => {
        input.disabled = true;
    });
}

let images = ["1.webp", "2.webp", "3.jpg"];
let indiceImage = 0;
let timerDiaporama = null;

function changerImage() {
    indiceImage = (indiceImage + 1) % images.length;

    document.getElementById("monImage").src =
        images[indiceImage];
}

function demarrerDiaporama() {
    if (timerDiaporama !== null) return;

    timerDiaporama = setInterval(changerImage, 2000);
}

function arreterDiaporama() {
    clearInterval(timerDiaporama);
    timerDiaporama = null;
}
