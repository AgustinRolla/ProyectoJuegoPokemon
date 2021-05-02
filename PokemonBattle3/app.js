//battle.html
const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

//Sonido de pokemones mouseover
var buttonbulbasaur = document.getElementById("bulbasaur");
var buttoncharmander = document.getElementById("charmander");
var buttonsquirtle = document.getElementById("squirtle");

var overmouse = onmouseover;

buttonbulbasaur.addEventListener(overmouse, playBulbaSound);
buttoncharmander.addEventListener(overmouse, playCharmaSound);
buttonsquirtle.addEventListener(overmouse, playSquirSound);

buttonbulbasaur.addEventListener("click", startGame);
buttoncharmander.addEventListener("click", startGame);
buttonsquirtle.addEventListener("click", startGame);

function playBulbaSound() {
  const musicSound = document.getElementById("SoundBulbasaur");

  musicSound.play();
}

function playCharmaSound() {
  const musicSound = document.getElementById("SoundCharmander");

  musicSound.play();
}

function playSquirSound() {
  const musicSound = document.getElementById("SoundSquirtle");

  musicSound.play();
}

var hpComputer = 100;
var hpPlayer = 100;

const attackElement = document.getElementById("attack1");
const attackNormal = document.getElementById("attack2");
const attackType = document.getElementById("attack1");
const ElementHpPlayer = document.getElementById("hp-player");
const ElementHpComputer = document.getElementById("hp-computer");

function startGame(event) {

  document.getElementById("battle-zone").style.display = "block";

  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Mostrar resultado de pokemones
  //Pokemon elegido por player
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  //Ataques del pokemon elegido por player

  attackElement.setAttribute("src", `imgs/attacks/${playerChoice}.png`);
  //Pokemon elegido por computer
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  //Ataques

  attackType.addEventListener("click", () => attack1(playerChoice, computerChoice));
  attackNormal.addEventListener("click", attack2);


}

//Obtiene pokemon de computer
const possibleChoices = ["bulbasaur", "charmander", "squirtle"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

//Funcion Ataques
function attack1(playerChoice, computerChoice) {

  if (
    (playerChoice === "bulbasaur" && computerChoice === "squirtle") ||
    (playerChoice === "charmander" && computerChoice === "bulbasaur") ||
    (playerChoice === "squirtle" && computerChoice === "charmander")
  ) {
    hpComputer -= 40;
    alert("Attack1, -40");
  } else if (playerChoice === computerChoice) {
    hpComputer -= 30;
    alert("Attack1, -30");
  } else {
    hpComputer -= 20;
    alert("Attack1, -20");
  }
  ElementHpComputer.textContent = `HP: ${hpComputer}`;
  setWinner();

}

function attack2() {
  hpComputer -= 20;
  alert("Attack2, -20");
  ElementHpComputer.textContent = `HP: ${hpComputer}`;
  setWinner();
}

//Ganador

function setWinner() {
  console.log(hpComputer);
  console.log(hpPlayer);
  if (hpComputer <= 0) {
    alert("GANASTE");
  } else if (hpPlayer <= 0) {
    alert("PERDISTE");
  }
}




