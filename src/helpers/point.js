import Vector from './vector';

export default class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Vector} vector 
     */
    add(vector){
        return new Point(this.x + vector.xDir, this.y + vector.yDir);
    }
}