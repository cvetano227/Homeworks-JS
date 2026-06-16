class Player {
  constructor(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
  }
  attack(enemy) {
    const damage = this.level * 10;
    enemy.health -= damage;
    console.log(`${this.name} attacks ${enemy.name} for ${damage} damage!`);

    if (enemy.health <= 0) {
      enemy.health = 0;
      console.log(`${enemy.name} has been defeated!`);
    } else {
      console.log(`${enemy.name} has ${enemy.health} health remaining.`);
    }
  }
  levelUp() {
    this.level++;
    console.log(`${this.name} reached level ${this.level}!`);
  }
}

class Enemy {
  constructor(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
  }
  attack(player) {
    const damage = this.level * 8;
    player.health -= damage;
    console.log(`${this.name} attacks ${player.name} for ${damage} damage!`);

    if (player.health <= 0) {
      player.health = 0;
      console.log(`${player.name} has been defeated!`);
    } else {
      console.log(`${player.name} has ${player.health} health remaining.`);
    }
  }
  levelUp() {
    this.level++;
    console.log(`${this.name} reached level ${this.level}!`);
  }
}

const player1 = new Player("Valentin", 100, 1);
const enemy1 = new Enemy("Hydra", 100, 1);

// Battle simulation
console.log("Battle Start!");
player1.attack(enemy1);
enemy1.attack(player1);
player1.levelUp();
enemy1.levelUp();
