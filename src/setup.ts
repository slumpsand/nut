import { Game } from "../engine/Game.js";

export const game = new Game({
        canvas: <HTMLCanvasElement> document.getElementById("canvas"),
        
        width: 800,
        height: 480,
    
        fps: 30,
        backgroundColor: "#424447",

        layerCount: 2
});

export const ui = game.layer(1);
export const main = game.layer(0);
export const setup = game.run;
export const asset = game.assets.asset;
