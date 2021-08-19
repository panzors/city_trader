import { Point } from "./point";

export default class Vector{
    constructor(xDir, yDir){
        this.xDir = xDir;
        this.yDir = yDir;
    }

    /**
     * 
     * @param {Vector} otherVector 
     */
    add(otherVector){
        return new Vector(this.xDir + otherVector.xDir, this.yDir + otherVector.yDir);
    }

    reverse(){
        return new Vector(-this.xDir, -this.yDir);
    }

    normalise(){
        const hypotenuseLength = Math.sqrt(Math.pow(this.yDir, 2) + Math.pow(this.xDir, 2));
        return new Vector(this.xDir / hypotenuseLength, this.yDir/hypotenuseLength);
    }

    multiply(factor){
        return new Vector(this.xDir * factor, this.yDir * factor);
    }

    length(){
        return Math.sqrt(Math.pow(this.xDir, 2) + Math.pow(this.yDir, 2));
    }
    
}

/**
 * 
 * @param {Point} p1 
 * @param {Point} p2 
 * @returns {Vector}
 */
export function getVector(p1, p2){
    return new Vector(p2.x - p1.x, p2.y - p1.y);
}