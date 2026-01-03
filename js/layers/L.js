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
            title: "L1: Grow I",
            description: "2x leaves",
            cost: new Decimal(10),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
        },
        21: {
            title: "L2: Grow II",
            description: "x3 leaves",
            cost: new Decimal(35),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("L", 11); },
        },
        22: {
            title: "L3: Develop I",
            description: "Leaves boost themselves at a reduced rate",
            cost: new Decimal(150),
            effect() {
            return player.points.div(1000).pow(0.1).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [11],
            unlocked() { return hasUpgrade("L", 11); },
        },
        31: {
            title: "L4: Grow III",
            description: "x2.5 leaves",
            cost: new Decimal(500),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [21],
            unlocked() { return hasUpgrade("L", 21); },
        },
        32: {
            title: "L5: Grow IV",
            description: "x3 leaves",
            cost: new Decimal(1490),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [21],
            unlocked() { return hasUpgrade("L", 21); },
        },
        33: {
            title: "L6: Grow V",
            description: "x3.14 leaves",
            effect() {
            return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(5000),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [22],
            unlocked() { return hasUpgrade("L", 21); },
        },
        34: {
            title: "L7: Grow VI",
            description: "x1.75 leaves",
            cost: new Decimal(7500),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'20px'},
            branches: [22],
            unlocked() { return hasUpgrade("L", 21); },
        },
        41: {
            title: "L8: Develop II",
            description: "Leaves boost themselves by a big amount",
             effect() {
            return player.points.div(16).pow(0.1).add(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            cost: new Decimal(2.4e4),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'50px'},
            branches: [31, 32, 33, 34],
            unlocked() { return hasUpgrade("L", 31); },
        },
        51: {
            title: "L9: Grow power",
            description: "x2 leaves",
            cost: new Decimal(2e5),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
        52: {
            title: "L10: Small boost",
            description: "x1.5 leaves",
            cost: new Decimal(6.5e5),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'20px','margin-left':'100px'},
            branches: [41],
            unlocked() { return hasUpgrade("L", 41); },
        },
        61: {
            title: "L11: Grow VII",
            description: "x5 leaves",
            cost: new Decimal(2.25e7),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: {'margin-top':'50px','margin-left':'225px'},
            branches: [52],
            unlocked() { return hasUpgrade("L", 51); },
        },
        62: {
            title: "L12: Grow VIII",
            description: "x4 Leaves",
            cost: new Decimal(1.75e8),
            currencyDisplayName: "Leaves",
            currencyInternalName: "points",
            style: { 'margin-left':'-750px', 'margin-top':'50px'},
            branches: [61],
            unlocked() { return hasUpgrade("L", 61); },
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

