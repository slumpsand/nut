import { game, setup, ui, main, asset } from "./setup.js";

game.assets.getImages(["test1", "test2"]);

function start() {
        console.log("start!");
}

function tick() {

}

function render() {
        ui.drawImage(asset("test1"), 0, 0);
        main.drawImage(asset("test2"), 50, 50);
}

setup(start, tick, render);
