import { Game } from "../nut/Game.js";

const game = new Game();

game.start = () => {

};

game.tick = () => {

};

game.config = {
    canvas: <HTMLCanvasElement> document.getElementById("canvas"),

    width: 800,
    height: 480,

    fps: 120,
    backgroundColor: "#424447"
};

function download(filename: string, text: string) {
    let pom = document.createElement("a");
    pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    pom.setAttribute("download", filename);
    
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


let output = "sep=#\r\nfps#total time#total count#total compution time#time per entry#total compution %#real fps\r\n";
function measure(fps: number) {
    if(fps > 120) {
        console.log("all measurements complete!");
        download("fps-measure.csv", output.split(".").join(","));

        return;
    }

    game.config.fps = fps;

    performance.clearMeasures();
    game.run();
    let before = performance.now();    
    setTimeout(() => {
        let diff = performance.now() - before;
        game.stop();

        let records = performance.getEntriesByName("frame", "measure");
        let total = 0.0;
        for(let i=0; i<records.length; i++) {
            total += records[i].duration;
        }

        output += `${fps}#${diff}#${records.length}#${total}#${total / records.length}#${(total / diff) * 100}#${records.length / (diff / 1000)}\r\n`
        console.log(`measurement for ${fps} FPS complete.`);

        measure(fps + 1);
    }, 10000);
}

measure(1);
