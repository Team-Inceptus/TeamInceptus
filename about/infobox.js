function getInfo(title) {
	switch (title) {
		case "GamerCoder215": {
			return "GamerCoder215 is the founder of Team Inceptus and TheNoobyGods organization. He is the main developer for many projects, including NoobyMC, TheNoobyGodsSMP, SilverSkillz, and more.";
		}
		case "amanaran1": {
			return "amanaran1 was originally a member of the guild. He has risen up to be one of the key developers inside team inceptus and is also considered to be GamerCoder215's best friend.";
		}
	}
}

function displayInfo(element) {
	var title = element.title;

	document.getElementById("infobox").innerHTML = getInfo(title);
}

function removeInfo() {
	document.getElementById("infobox").innerHTML = "";
}