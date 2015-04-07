
/*Alert saying hi!*/
alert('Hey there!');
console.log("Hey there, again!");

var myAge= "23";
var yourAge= "20";
var age = myAge + yourAge;
console.log(age);

var myTeams = [
	["Giants", "Knicks", "Yankees"]
	["49ers", "Rangers", "Chargers"]
]
console.log(myTeams[2][2]);


if (10>30)
	{
		console.log("That doesn't make sense!");
	}
else
	{
		console.log("Phew! Great job!");
	}


function heyName(name)
{
	console.log("Hey there" + name);
}

function team(favTeam){
	if (favTeam === Gaints)
	{
		console.log("Most Def!");
	}
	else if(favTeam == Pats)
	{
		console.log("Are you kidding me");
		return "loser";
	}
	else
	{
		console.log("Nope!");
		return "loser";
	}
}

function test(){
	console.log("I am testing a function")
}


function addTogether(){
	var color = document.getElementById('color').value;
	var car = document.getElementById('car').value;

	color = parseInt(color);
	car = parseInt(car);

	alert(color + car);

	document.getElementById('result').innerHTML = color + car;

}






