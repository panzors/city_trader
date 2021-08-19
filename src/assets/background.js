
const DEFAULT_DRAG_DIRECTION = "";


// I NEED TO DO THIS LATER

export default class Background{
    constructor(graphic, sizeX, sizeY){
        this.graphic = graphic;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    get isDraggable(){
        return true;
    }

    nudgeLocation(vector){
        if (vector){
            this.x -= vector.xDir;
            this.y -= vector.yDir;
        }
    }

    draw(ctx){
        //assume graphic is a square for now
        this.path = new Path2D();
        this.path.rect(0,0, sizeX, sizeY);
        ctx.fillStyle = 'rgba(255, 165, 0, 1)';

        ctx.fill(this.path);
    }
}