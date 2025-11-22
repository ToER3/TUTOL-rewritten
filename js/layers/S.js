addLayer("S", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a34101",
    requires: new Decimal(1e6), // Can be a function that takes requirement increases into account
    resource: "Seeds", // Name of prestige currency
    baseResource: "Leaves", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal",
    prestigeButtonText() {
        return `Reset for ${format(getResetGain(this.layer, useType = "normal"))} seeds`
     },
    exponent: 0.25,
    gainMult() { // Calculate the multiplier for main currency from bonuses
        gain = new Decimal(1)
        if(hasUpgrade("L",51)) gain = gain.times(2)
        if (hasUpgrade("L",61)) {gain = gain.times(3)}
        return gain
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "s: Reset for seeds", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    infoboxes: {
    fart: {
        title: "The first layer",
        body() { return "Your tree has grew for a while now, its even started to produce seeds... at the cost of your leaves, as your tree expands however, you find some radioactive material. You think maybe that will help the tree endure worser conditions and inturn, increase the growth of everything! <br> Nice! You've reached the next reset layer. This is where the game kinda diverges from TUTOL as we have CHALLENGES... or hindrances or radioactive exposure tests blah blah blah. These radioactive exposure tests will make your tree endure harsh radioactive conditions which debuff your tree inturn for a greater buff! For now you only have one unlocked, that is uranium-238. Good luck player! " },
        },
    },
    challenges: {
    11: {
        name: "Uranium-238 Exposure",
        challengeDescription: "Expose your tree to some Uranium-238 radiation, which powers your leaves by 0.6 (which is a debuff), and divides your leaf gain by 50",
        canComplete: function() {return player.points.gte(1e6)},
        goalDescription: "Gain 1e6 Leaves",
        rewardDescription: "Leaves are now boosted based on your seeds",
        rewardEffect() {
            return player.S.points.add(1).pow(0.4)
        },
        rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x"}, 
        style: {'width':'300px', 'height':'300px', color:'#000000ff', 'background-color':'#00ff62ff', 'border-radius':'50px', 'border':'4px solid #17c75aff', },
        unlocked() { if(hasUpgrade("S",11)) return true; else return false;}
        },
    
    },
    
    
    upgrades: {
        11: {
            title: "S1: Why are there challenges to seeds?",
            description: "Boost leaves by x10 and unlock seed challenges",
            cost: new Decimal(1),
        },
        21: {
            title: "S2: The radiation wont bite back later trust me",
            description: "x2 leaves",
            cost: new Decimal(25),
            
            style: {'margin-top':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("S", 11); },
        },
        22: {
            title: "S3: Try the 1st exposure test now",
            description: "x50 leaves",
            cost: new Decimal(150),
            
            style: {'margin-top':'20px', 'margin-left':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("S", 11); },
        },
        23: {
            title: "S4: EVIL dev spladder",
            description: "muhahahaha does nothing give me all your seeds",
            cost: new Decimal(1000),
            
            style: {'margin-top':'20px', 'margin-left':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("S", 11); },
        },
        
    },
    tabFormat: {
    "Upgrades": {
        content: ["infobox", "fart","main-display","prestige-button","blank",  "upgrades"],
        
    },
    "Radiation exposure tests": {
        content: ["challenges"],
    },
    "Help": {
        content: [ ["infobox", "fart"]],
    },
    

}      
})
