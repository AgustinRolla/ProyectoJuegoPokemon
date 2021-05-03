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

  ElementHpComputer.textContent = `HP: 100`;
  ElementHpPlayer.textContent = `HP: 100`;

  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  //Pokemon elegido por player
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  //Ataques del pokemon elegido por player

  attackElement.setAttribute("src", `imgs/attacks/${playerChoice}.png`);
  //Pokemon elegido por computer
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  //Ataques

  attackType.addEventListener("click", () => attack1(playerChoice, computerChoice));
  attackType.addEventListener("click", () => getAttackComputer);

  attackNormal.addEventListener("click", attack2);
  attackNormal.addEventListener("click", () => getAttackComputer);

  delete attackType;
  delete attackNormal;
  
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

//Ataque Computer
function getAttackComputer() {
  // Obtener un valor aleatorio
  const attackComputer = Math.floor(Math.random() * 2);
  console.log(attackComputer)
  // Retornar elección
  if (attackComputer === 1) {
    return attack1Computer(playerChoice, computerChoice)
  } else {
    return attack2Computer()
  }
  
}

function attack1Computer(playerChoice, computerChoice) {

  if (
    (computerChoice === "bulbasaur" && playerChoice === "squirtle") ||
    (computerChoice === "charmander" && playerChoice === "bulbasaur") ||
    (computerChoice === "squirtle" && playerChoice === "charmander")
  ) {
    hpPlayer -= 40;
    alert("Attack1, -40");
  } else if (playerChoice === computerChoice) {
    playerChoice -= 30;
    alert("Attack1, -30");
  } else {
    playerChoice -= 20;
    alert("Attack1, -20");
  }
  ElementHpPlayer.textContent = `HP: ${hpPlayer}`;
  setWinner();
  }

function attack2Computer() {
  playerChoice -= 20;
  alert("Attack2, -20");
  ElementHpPlayer.textContent = `HP: ${hpPlayer}`;
  setWinner();
}

//Ataques player
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
  if (hpComputer <= 0) {
    alert("GANASTE");
    delete attackType;
    delete attackNormal;
  } else if (hpPlayer <= 0) {
    alert("PERDISTE");
    delete attackType;
    delete attackNormal;
  }
}




