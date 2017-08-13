export class EventRegistry {

}

export class GameRegistry {
    private startMethods: { (): void } [];
    private tickMethods: { (): void } []; 

    constructor() {
        this.startMethods = [];
        this.tickMethods = [];
    }

    registerStart(func: () => void) {
        this.startMethods.push(func);
    }

    registerTick(func: () => void) {
        this.tickMethods.push(func);
    }

    callStart() {
        this.startMethods.forEach(func => func());
    }

    callTick() {
        this.tickMethods.forEach(func => func());
    }
}

export class Registry {
    events: EventRegistry;
    game: GameRegistry;

    constructor() {
        this.events = new EventRegistry();
        this.game = new GameRegistry();
    }
}
