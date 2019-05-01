var player = prompt("Saisissez votre nom :");
console.log("Joueur :", player);

var nombreAlea = Math.floor(Math.random() * 100) + 1;
var compteur = 0;

do
{
  compteur++;
  console.log("Valeur saisie :", nombreSaisi);
  var nombreSaisi = prompt("Saisissez un nombre " + player + " :");
  nombreSaisi = Number(nombreSaisi);

  while (Number.isNaN(nombreSaisi))
  {
    nombreSaisi = prompt("J'ai dit un nombre " + player + "...");
    nombreSaisi = Number(nombreSaisi);
  }

  if (nombreSaisi<nombreAlea)
  { console.log("Trop petit !");
    alert("Trop petit !");
  }
  if (nombreSaisi>nombreAlea)
  {
    console.log("Trop grand !");
    alert("Trop grand !");
  }
} while (nombreSaisi!=nombreAlea);

console.log("Bravo " + player + " ! Tu as trouvé " + nombreAlea + " en " + compteur + " coups.");
