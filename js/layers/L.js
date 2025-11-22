addLayer("L", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#4BDC13",                       // The color for this layer, which affects many elements.
                // The name of this layer's main prestige resource.
    row: 0,                                 // The row this layer is on (0 is the first row).
      // A function to return the current amount of baseResource.
                             // Determines the formula used for calculating prestige currency.
    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.
    infoboxes: {
    lore: {
        title: "Welcome",
        body() { return "You wake up in a wasteland, you wonder where you are? How you ended up here? It seems like you forgot any past memories. There is a tree infront of you, and this world has a lack of life, so its time to give it some life <br> Welcome to TUTOL:R! A rework of my old TUTOl web port, reach 1e6 leaves for the next layer!" },
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
            cost: new Decimal(20000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'50px'},
            branches: [31, 32, 33, 34],
            unlocked() { return hasUpgrade("L", 31); },
        },
        51: {
            title: "L9: Massive jump in costs",
            description: "Leaves and seeds boosted by x2",
            cost: new Decimal(1e9),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
        52: {
            title: "L10: Nevermind",
            description: "x3 leaves",
            cost: new Decimal(2e9),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'100px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
        61: {
            title: "L11: More and more",
            description: "x3 seeds",
            cost: new Decimal(2e10),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'50px','margin-left':'225px'},
            branches: [52],
            unlocked() { return hasUpgrade("L", 41); },
        },
    },
    tabFormat: {
        "Upgrades": {
            content: ["upgrades"]
        },
        "Help": {
            content: [ ["infobox", "lore"]],
        }

    }
})

