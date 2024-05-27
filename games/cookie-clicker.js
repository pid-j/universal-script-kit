// pid-j.github.io/universal-script-kit/games/cookie-clicker.js - Get infinite cookies, most achievements, and most upgrades
Game.cookies = Infinity;
Game.lumps = Infinity;

Game.ObjectsById.forEach(element => {
	element.amount = 10000;
});

Object.values(Game.Upgrades).forEach(element => {
	element.buy(true);
});

Game.toSave = true;

document.body.innerHTML = "<span style=\"text-align: center; width: 80%; display: block\">The cheats have been loaded. Please reload to see changes.</span>";
document.body.style.background = "black";
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.fontSize = "1.3em";
