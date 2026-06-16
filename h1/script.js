class Player {
  constructor(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  attack(enemy) {
    const damage = this.level * 10;

    if (enemy.isDead) {
      addLog(`${enemy.name} is already defeated!`);
      return;
    }

    enemy.health -= damage;

    addLog(`${this.name} attacks ${enemy.name} for ${damage} damage!`);

    if (enemy.health <= 0) {
      enemy.health = 0;
      enemy.isDead = true;

      addLog(`${enemy.name} has been defeated!`);

      this.levelUp();
    } else {
      addLog(`${enemy.name} has ${enemy.health} health remaining.`);
    }

    updateUI();
  }

  levelUp() {
    this.level++;

    addLog(`${this.name} reached level ${this.level}!`);
  }
}

class Enemy {
  constructor(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.isDead = false;
  }

  attack(player) {
    const damage = this.level * 8;
    player.health -= damage;

    addLog(`${this.name} attacks ${player.name} for ${damage} damage!`);

    if (player.health <= 0) {
      player.health = 0;

      addLog(`${player.name} has been defeated!`);
    } else {
      addLog(`${player.name} has ${player.health} health remaining.`);
    }

    updateUI();
  }
}

const player1 = new Player("Valentin", 100, 1);
const enemy1 = new Enemy("Hydra", 100, 1);

const playerInfo = document.getElementById("player-info");
const enemyInfo = document.getElementById("enemy-info");
const attackBtn = document.getElementById("attack-btn");
const enemyAttackBtn = document.getElementById("enemy-attack-btn");
const levelUpBtn = document.getElementById("levelup-btn");
const restartBtn = document.getElementById("restart-btn");
const log = document.getElementById("log");

function updateUI() {
  playerInfo.innerHTML = `
    <h2>Player</h2>
    <p>Name: ${player1.name}</p>
    <p>Health: ${player1.health}</p>
    <p>Level: ${player1.level}</p>
  `;

  enemyInfo.innerHTML = `
    <h2>Enemy</h2>
    <p>Name: ${enemy1.name}</p>
    <p>Health: ${enemy1.health}</p>
    <p>Level: ${enemy1.level}</p>
  `;
}
function restartGame() {
  player1.health = 100;
  player1.level = 1;

  enemy1.health = 100;
  enemy1.level = 1;
  enemy1.isDead = false;

  log.innerHTML = "";

  addLog("Battle Start!");
  updateUI();
}
restartBtn.addEventListener("click", () => {
  restartGame();
});

function addLog(message) {
  log.innerHTML += `<p>${message}</p>`;

  log.scrollTop = log.scrollHeight;
}

attackBtn.addEventListener("click", () => {
  player1.attack(enemy1);
});

enemyAttackBtn.addEventListener("click", () => {
  enemy1.attack(player1);
});

levelUpBtn.addEventListener("click", () => {
  player1.levelUp();
  updateUI();
});

updateUI();

addLog("Battle Start!");
