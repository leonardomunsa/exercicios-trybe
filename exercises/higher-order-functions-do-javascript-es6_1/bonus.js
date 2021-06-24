const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// parte 1 - 1
function dragonDamage() {
  const min = Math.ceil(15);
  const max = Math.floor(dragon.strength);
  const jimii = Math.floor(Math.random() * (max - min + 1)) + min;
	return jimii;
}

// parte 1 -2
function warriorDamage() {
  const min = Math.ceil(warrior.strength);
  const max = Math.floor(warrior.strength * warrior.weaponDmg);
  const james = Math.floor(Math.random() * (max - min + 1)) + min;
	return james;
}

// parte 1 - 3
function mageManaDamage() {
	const min = Math.ceil(mage.intelligence);
  const max = Math.floor(min * 2);
  const damage = Math.floor(Math.random() * (max - min + 1)) + min;
	const objeto = {
		manaSpent: 0,
		dano: 'Sem mana suficiente',
	};
	if (mage.mana > 15) {
		objeto.manaSpent = 15;
		objeto.dano = damage;
	}
	return objeto;
}

// parte 2
const gameActions = {
  // Crie as HOFs neste objeto.
	// parte 2 - 1
	warriorTurn: (funcao) => {
		const dano = funcao();
		dragon.healthPoints -= dano;
		warrior.damage = dano;
	},
	// parte 2 - 2
	mageTurn: (funcao) => {
		const dana = funcao();
		dragon.healthPoints -= dana.dano;
		mage.damage = dana.dano;
		mage.mana -= dana.manaSpent;
	},
	// parte 2 - 3
	dragonTurn: (funcao) => {
		const dane = funcao();
		mage.healthPoints -= dane;
		warrior.healthPoints -= dane;
		dragon.damage = dane;
	},
	// parte 2 - 4
	turn: (objeto) => {
		return objeto;
	},
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageManaDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turn(battleMembers));