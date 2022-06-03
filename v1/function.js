const arrayMap = generateMap();
const action = defineVerbs();
const button = document.getElementById("do");
button.onclick = takeVerb;

let totalHistory = new String();

let welcome =
	"Bienvenido/a! Para moverte puedes usar el comando <span>IR</span> , cada lugar ofrecera una breve descripción, también podras encontrar objetos y herramientas que podrás recoger si quieres con el comando <span>COGER</span> , igualmente podras usar el comando <span>USAR</span> y <span>VER</span> tanto en los lugares como en los objetos. Que empiece la aventura!   </p>";
const invalidVerb =
	"Commando inválido... Commandos válidos: IR, VER, COGER, USAR , HABLAR";

function takeVerb() {
	let command = document.getElementById("commands").value;
	let commandArr = command.toLowerCase().split(" ");
	let getVerb = commandArr[0];
	if (action.has(getVerb) == false) {
		return printOutput(invalidVerb);
	}
	return getVerb;
}

function printOutput(history) {
	totalHistory = history + "<br>" + "<br>" + totalHistory;
	document.getElementById("description").innerHTML = totalHistory;
}

function generateMap() {
	const arrayMap = new Array();

	arrayMap[0] = new Array();
	arrayMap[1] = new Array();
	arrayMap[2] = new Array();
	arrayMap[3] = new Array();

	arrayMap[0][0] = {
		description:
			"Encuentras un CAMION cortando el paso de la calle. Hay marcas en el suelo de un derrape y varias CAJAS, con el mismo logotipo que el cartel de la tienda, tiradas por el suelo ",
		exit: ["s"],
		items: ["camion", "cajas", "linterna"],
	};

	arrayMap[0][1] = {
		description: "Start",
		exit: ["e"],
		items: ["llave"],
	};

	arrayMap[0][2] = {
		description: "",
		exit: ["e", "s", "o"],
		items: [""],
	};

	arrayMap[0][3] = {
		description: "",
		exit: ["s", "o"],
		items: [""],
	};

	arrayMap[1][0] = {
		description: "",
		exit: ["n", "s", "e"],
		items: [""],
	};

	arrayMap[1][1] = {
		description: "",
		exit: ["e", "o"],
		items: [""],
	};

	arrayMap[1][2] = {
		description: "",
		exit: ["n", "s", "o"],
		items: [""],
	};

	arrayMap[1][3] = {
		description: "",
		exit: ["n", "s"],
		items: [""],
	};

	arrayMap[2][0] = {
		description: "",
		exit: ["n", "s"],
		items: [""],
	};

	arrayMap[2][1] = {
		description: "",
		exit: ["e"],
		items: [""],
	};

	arrayMap[2][2] = {
		description: "",
		exit: ["n", "s"],
		items: [""],
	};

	arrayMap[2][3] = {
		description: "",
		exit: ["n"],
		items: [""],
	};

	arrayMap[3][0] = {
		description: "",
		exit: ["n", "s"],
		items: [""],
	};

	arrayMap[3][1] = {
		description: "",
		exit: ["e", "o"],
		items: [""],
	};

	arrayMap[3][2] = {
		description: "",
		exit: ["n", "e", "o"],
		items: [""],
	};

	arrayMap[3][3] = {
		description: "",
		exit: ["o"],
		items: [""],
	};

	return arrayMap;
}

function defineVerbs() {
	let action = new Map();
	action.set("ir", { do: "n", sur: "s", este: "e", oeste: "o" });
	action.set("ver");
	action.set("coger");
	action.set("usar");
	action.set("hablar");

	return action;
}
