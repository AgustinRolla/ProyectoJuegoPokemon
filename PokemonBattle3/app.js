const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const buttons = document.querySelectorAll("button");

let buttonbulbasaur = document.getElementById("bulbasaur");
let buttoncharmander = document.getElementById("charmander");
let buttonsquirtle = document.getElementById("squirtle");

let overmouse = onmouseover;

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

let hpComputer = 100;
let hpPlayer = 100;

const attackElement = document.getElementById("attack1");
const attackNormal = document.getElementById("attack2");
const attackType = document.getElementById("attack1");
const ElementHpPlayer = document.getElementById("hp-player");
const ElementHpComputer = document.getElementById("hp-computer");
let firstTime = false

function startGame(event) {
  hpComputer = 100;
  hpPlayer = 100;

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

  if (firstTime === false) {
    attackType.addEventListener("click", () => doAttacks(playerChoice, computerChoice));
    attackNormal.addEventListener("click", () => doAttacks2(playerChoice, computerChoice));
    firstTime = true
  }
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
function doAttacks(playerChoice, computerChoice) {
  attack1(playerChoice, computerChoice)
  setTimeout(getAttackComputer, 1000)
}

function doAttacks2(playerChoice, computerChoice) {
  attack2()
  setTimeout(() => getAttackComputer(playerChoice, computerChoice), 1000)
}
//Ataques player
function attack1(playerChoice, computerChoice) {
  if (hpPlayer <= 0) {
    return null;
  }
  if (
    (playerChoice === "bulbasaur" && computerChoice === "squirtle") ||
    (playerChoice === "charmander" && computerChoice === "bulbasaur") ||
    (playerChoice === "squirtle" && computerChoice === "charmander")
  ) {
    hpComputer -= 30;
    alert("Your pokemon has used Attack 1 with a damage of 30hp");
  } else if (playerChoice === computerChoice) {
    hpComputer -= 20;
    alert("Your pokemon has used Attack 1 with a damage of 20hp");
  } else {
    hpComputer -= 10;
    alert("Your pokemon has used Attack 1 with a damage of 10hp");
  }
  ElementHpComputer.textContent = `HP: ${hpComputer}`;
  setWinner();

}

function attack2() {
  if (hpPlayer <= 0) {
    return null;
  }
  hpComputer -= 15;
  alert("Your pokemon has used Attack 2 with a damage of 15hp");
  ElementHpComputer.textContent = `HP: ${hpComputer}`;
  setWinner();
}

//Ataque Computer
function getAttackComputer(playerChoice, computerChoice) {
  if (hpComputer <= 0 || hpPlayer <= 0) {
    return null;
  }
  // Obtener un valor aleatorio
  const attackComputer = Math.floor(Math.random() * 2);
  // Retornar elección
  if (attackComputer === 1) {
    return attack1Computer(playerChoice, computerChoice)
  } else {
    return attack2Computer()
  }
}

function attack1Computer(playerChoice, computerChoice){
  if(
    (computerChoice === "bulbasaur" && playerChoice === "squirtle") ||
    (computerChoice === "charmander" && playerChoice === "bulbasaur") ||
    (computerChoice === "squirtle" && playerChoice === "charmander")
  ){
    hpPlayer -= 30;
    alert("Your pokemon has received Attack 1 with a damage of 30hp");
  }else if(computerChoice === playerChoice){
    hpPlayer -= 20;
    alert("Your pokemon has received Attack 1 with a damage of 20hp");
  }else{
    hpPlayer -= 10;
    alert("Your pokemon has received Attack 1 with a damage of 10hp");
  }
  ElementHpPlayer.textContent = `HP: ${hpPlayer}`;
  setWinner();
  }

function attack2Computer() {
  hpPlayer -= 15;
  alert("Your pokemon has received Attack 2 with a damage of 15hp");
  ElementHpPlayer.textContent = `HP: ${hpPlayer}`;
  setWinner();
}

//Ganador
function setWinner() {
  if (hpComputer <= 0) {
    alert("GANASTE");
    ElementHpComputer.textContent = `HP: KO`;
  } else if (hpPlayer <= 0) {
    alert("PERDISTE");
    ElementHpPlayer.textContent = `HP: KO`;
  }
}




