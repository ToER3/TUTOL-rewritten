let modInfo = {
	name: "The Upgrade Tree of Life: Rewritten",
	author: "Euler number squared",
	pointsName: "Leaves",
	modFiles: ["layers/S.js", "layers/L.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "μ1.0",
	name: "The 1st beta update",
}

let changelog = `<h1>Changelog:</h1><br>
    <h2>μ1.0</h2><br>
		- Seed upgrades added<br>
		- Seed challenges added<br>
		- More leaf upgrades added<br>
		- Look at this nice tabs
	<br><h3>μ-∞</h3><br>
		- First release<br>`

let winText = `you cheater you aren't meant to reach endgame now!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	

	let gain = new Decimal(1)
	if (hasUpgrade("L",11)) {gain = gain.times(2)}
	if (hasUpgrade("L",21)) {gain = gain.times(3)}
	if (hasUpgrade("L",22)) {gain = gain.times(5)}
	if (hasUpgrade("L",31)) gain = gain.times(upgradeEffect("L",31))
	if (hasUpgrade("L",32)) {gain = gain.times(1.5)}
	if (hasUpgrade("L",33)) gain = gain.times(upgradeEffect("L",33))
	if (hasUpgrade("L",34)) {gain = gain.times(10)}
	if (hasUpgrade("L",41)) {gain = gain.times(100)}
	if (inChallenge("S", 11)) {gain = gain.pow(0.6).times(1/40)}
	if (hasUpgrade("S", 11)) {gain = gain.times(10)}
	if (hasUpgrade("L",51)) {gain = gain.times(2)}
	if (hasUpgrade("L",52)) {gain = gain.times(3)}
	if (hasUpgrade("S",21)) {gain = gain.times(2)}
	if (hasUpgrade("S",22)) {gain = gain.times(50)}
    if (challengeEffect("S",11).gt(1)) {gain = gain.times(challengeEffect("S",11))}
	


	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}