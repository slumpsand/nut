import config from "../config";

import { Render } from "./Render";
import { EventManager } from "./EventManager";

const render = new Render(<HTMLCanvasElement> document.getElementById("canvas"));
const events = new EventManager();

export { config, render, events };
