import * as config from "./config.js";

import { Render } from "./render/Render.js";
import { EventManager } from "./keyboard/EventManager.js";

const render = new Render(document.getElementById("canvas"));
const events = new EventManager();

export { config, render, events };
