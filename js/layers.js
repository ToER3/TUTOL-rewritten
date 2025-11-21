addLayer("L", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
                // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).
    baseResource: "Leaves",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points},  // A function to return the current amount of baseResource.
    type: "none",                         // Determines the formula used for calculating prestige currency.
    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
    infoboxes: {
    lore: {
        title: "Welcome",
        body() { return "Welcome to The Upgrade Tree of Life: Rewritten, or TUTOL:R. This will work a bit different from the real TUTOL, or even the old TUTOL web if you played <br> For now just grind until you gain 1e6 leaves to gain seeds!" },
        },
    },
    upgrades: {
       
        11: {
            title: "L1: Welcome!",
            description: "Boost Leaf gain by 2x",
            cost: new Decimal(10),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
        },
        21: {
            title: "L2: More leaves",
            description: "x3 leaves",
            cost: new Decimal(25),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("L", 11); },
        },
        22: {
            title: "L3: Bunch of leaves",
            description: "x5 leaves",
            cost: new Decimal(100),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("L", 11); },
        },
        31: {
            title: "L4: Self-synergy",
            description: "Leaves boost themselves",
            cost: new Decimal(500),
                effect() {
            return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [21],
            unlocked() { return hasUpgrade("L", 21); },
        },
        32: {
            title: "L5: Why is there no tree age?",
            description: "Dont ask me! Boost Leaf gain by 1.5x",
            cost: new Decimal(1000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [21],
            unlocked() { return hasUpgrade("L", 21); },
        },
        33: {
            title: "L6: Leaf upgrade-synergy",
            description: "L3's effect is squared",
            effect() {
            return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(3000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [22],
            unlocked() { return hasUpgrade("L", 21); },
        },
        34: {
            title: "L7: Change of pace",
            description: "Boost leaves by x10",
            cost: new Decimal(10000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [22],
            unlocked() { return hasUpgrade("L", 21); },
        },
        41: {
            title: "L8: Stacking leaves!",
            description: "Boost leaves by x100",
            cost: new Decimal(50000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'50px'},
            branches: [31, 32, 33, 34],
            unlocked() { return hasUpgrade("L", 31); },
        },
        51: {
            title: "L9: evil dev spladder",
            description: "placeholder",
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
        52: {
            title: "placeholder",
            description: "placeholder",
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'100px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
    }
})

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
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "s: Reset for seeds", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "S1: Why are there challenges to seeds?",
            description: "Boost leaves by x10 and unlock seed challenges",
            cost: new Decimal(10),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
        },
    }
})
