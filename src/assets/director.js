import * as Mouse from '../ui/mouse-mutex'
import Scene from './scene';
const scenes = {};
let currentSceneName = null;

export function setCurrentScene(name){
    if (scenes[name] === undefined){
        scenes[name] = new Scene(name);
    }

    currentSceneName = name;
}

export function addToScene(name, asset){
    const scene = scenes[name]
    if (name && scene){
        scene.addAsset(asset);
    } else{
        throw Error(`something wrong with this scene ${name}`);
    }
}

export function passTime(delta){
    const scene = getCurrentScene();
    scene.passTime(delta);
}

export function addToCurrentScene(asset){
    if (!currentSceneName){
        throw Error(`Current Scene not set, please set the scene to add asset to`);
    }

    addToScene(currentSceneName, asset);
}

export function getCurrentScene(){
    return scenes[currentSceneName];
}

export function onMouseMove(ctx, event){
    const currentScene = getCurrentScene();
    const zIndexSorted = currentScene.assets.sort(zIndexFunction);
    let finished = false;
    for (let i = 0; i< zIndexSorted.length; i++){
        const asset = zIndexSorted[i];
        if (finished){
            asset.setMouseOver(false);
            continue;
        }
        
        const isMouseInside = asset.isMouseInside(ctx, event);
        if (isMouseInside) {
            finished = true;
            asset.setMouseOver(true);
            continue;
        } else {
            asset.setMouseOver(false);
        }
    }

    if (currentScene.isDragging){
        const asset = currentScene.draggedAsset;
        if (asset?.options?.isDraggable && !asset?.options?.isSnapOnDragEnd){
            //animate the drag
            const vector = Mouse.calculateCurrentVector(event);
            asset.nudgeLocation(vector);
        }
    }
}

const zIndexFunction = function(a, b){
    if (a.zIndex > b.zIndex) return -1;
    if (a.zIndex < b.zIndex) return 1;

    return 0;
}


export function onMouseUp(ctx, event){
    //we'll do the snap move first, then figure shit out
    const currentScene = getCurrentScene();
    const asset = currentScene.draggedAsset;
    if (asset?.options?.isDraggable
        && asset?.options?.isSnapOnDragEnd){
        const vector = Mouse.calculateCurrentVectorSinceMouseDown(event);
        asset.nudgeLocation(vector);
    }

    if (asset){
        asset.outputDebug();
    }
    currentScene.onMouseUp();
}

export function onMouseDown(ctx, event){
    const currentScene = getCurrentScene();
    currentScene.onMouseDown();
}

export function drawScene(ctx){
    const scene = getCurrentScene();
    //TODO: adjust for zoom level at some stage
    scene.assets.sort(zIndexFunction).reverse().forEach(x => x.draw(ctx));
}

export function removeFromCurrentScene(thing){
    const scene = getCurrentScene();
    const index = scene.assets.findIndex((element) => element.id == thing.id);
    if (index >= 0){
        scene.assets.splice(index, 1);
    }
}