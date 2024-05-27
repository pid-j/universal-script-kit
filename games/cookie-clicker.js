// pid-j.github.io/universal-script-kit/games/cookie-clicker.js - Get infinite cookies, most achievements, and most upgrades
Game.cookies = Infinity;
Game.lumps = Infinity;

Game.ObjectsById.forEach(element => {
	element.amount = 10000;
});

Object.values(Game.Upgrades).forEach(element => {
	element.buy(true);
});
