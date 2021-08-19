
export default class Scene {
    constructor(name){
        this.name = name;
        this.assets = []; 
        this.isMouseDown = false;
        this.draggedAsset = null;
    }

    addAsset(asset){
        this.assets.push(asset);
    }

    get currentMouseOverAsset(){
        return this.assets.find(x => x.isMouseOver === true);
    }

    get isDragging(){
        return this.draggedAsset !== null;
    }

    onMouseDown(){
        this.isMouseDown = true;
        this.draggedAsset = this.currentMouseOverAsset;
        if (this.currentMouseOverAsset) {
            this.currentMouseOverAsset.setDragging(true);
        }
    }

    onMouseUp(){
        // calculate what to happen if there was a asset that's movable
        this.isMouseDown = false;
        if (this.draggedAsset){
            this.draggedAsset.setDragging(false);
        }
        this.draggedAsset = null;
    }

    passTime(deltaTime){
        this.assets.forEach(asset => asset.passTime(deltaTime));
    }

}
