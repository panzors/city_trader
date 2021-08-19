import CraftingRecipe from "../core/inventory/crafting-recipe";
import Crate from "../core/inventory/crate";

export const PRODUCTS = {
  wood: {
    name: "wood",
    baseValue: 10,
    flavourText:
      "everyone needs some wood yo. used in construction of most products",
  },
  tools: {
    name: "tools",
    baseValue: 50,
    flavourText:
      "some things can be done with tools. tools reduce time to produce products",
  },
  fineTools: {
    name: "fineTools",
    baseValue: 250,
    flavourText: "used for higher end products",
  },
  ironOre: {
    name: "ironOre",
    baseValue: 5,
    flavourText: "needs more work to be usable",
  },
  ironIngot: {
    name: "ironIngot",
    baseValue: 30,
    flavourText: "used to produce a lot of other goodies",
  },
  ironWeapons: {
    name: "ironWeapons",
    baseValue: 400,
    flavourText: "point the pointy end to people you don't like",
  },
  stone: {
    name: "stone",
    baseValue: 8,
  },
  food: {
    name: "food",
    baseValue: 2,
    flavourText: "you eat this to survive, duh",
  },
};

export const RAW_PRODUCTION_RECIPE = {
  wood: new CraftingRecipe([], [new Crate(PRODUCTS.wood, 1)], 500),
  stone: new CraftingRecipe([], [new Crate(PRODUCTS.stone, 1)], 500),
  ironIngot: new CraftingRecipe([new Crate(PRODUCTS.ironOre, 1)], [new Crate(PRODUCTS.ironIngot, 1)], 1000)
};
