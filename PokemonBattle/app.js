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

const attackElement = document.getElementById("attack1");
const attackNormal = document.getElementById("attack2");
const attackType = document.getElementById("attack1");
const ElementHpPlayer = document.getElementById("hp-player");
const ElementHpComputer = document.getElementById("hp-computer");

let hpComputer = 100;
let hpPlayer = 100;
let firstTime = false

function startGame(event) {
  hpComputer = 100;
  hpPlayer = 100;

  ElementHpComputer.textContent = `HP: 100`;
  ElementHpPlayer.textContent = `HP: 100`;
    
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;
  const computerChoice = getComputerChoice();

  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  attackElement.setAttribute("src", `imgs/attacks/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  if (firstTime === false) {
    attackType.addEventListener("click", () => doAttacks(playerChoice, computerChoice));
    attackNormal.addEventListener("click", () => doAttacks2(playerChoice, computerChoice));
    firstTime = true
  }
}

const possibleChoices = ["bulbasaur", "charmander", "squirtle"];

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  return possibleChoices[computerChoice];  
}

function doAttacks(playerChoice, computerChoice) {
  attack1(playerChoice, computerChoice)
  setTimeout(getAttackComputer, 1000)
}

function doAttacks2(playerChoice, computerChoice) {
  attack2()
  setTimeout(() => getAttackComputer(playerChoice, computerChoice), 1000)
}

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

function getAttackComputer(playerChoice, computerChoice) {
  if (hpComputer <= 0 || hpPlayer <= 0) {
    return null;
  }
  const attackComputer = Math.floor(Math.random() * 2);
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

function setWinner() {
  if (hpComputer <= 0) {
    ElementHpComputer.textContent = `HP: KO`;
    alert("YOU WIN!! The game will be restart");
    setTimeout(window.location="battle.html", 5000);
    } else if (hpPlayer <= 0) {
    ElementHpPlayer.textContent = `HP: KO`;
    alert("YOU LOST!!  The game will be restart");
    setTimeout(window.location="battle.html", 5000);
  }
}




