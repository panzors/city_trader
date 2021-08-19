import Crate from "./crate";

export default class CraftingRecipe {

    /**
     * 
     * @param {Crate[]} inputs 
     * @param {Crate[]} outputs 
     * @param {Number} duration 
     */
    constructor(inputs, outputs, duration) {
        this.inputs = inputs;
        this.outputs = outputs;
        this.duration = duration;
    }

}
