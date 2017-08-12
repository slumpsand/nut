let callbacks = {};

function keyup(key) {
    console.log(`[engine/keyboard/index.js]: calling keyup callbacks for keycode ${key}`);
    for(let index in callbacks) {
        if (index == key) {
            callbacks[key].forEach((callback) => callback());
        }
    }
}

const register = {
    keyup: (key, callback) => {
        console.log(`[engine/keyboard/index.js]: registering callback for keycode ${key}`);
        if (!(key in callbacks)) {
            callbacks[key] = [callback];
        } else {
            callbacks[key].push(callback);
        }
    }
}

const keyboard = { keyup, register };
export default keyboard;
