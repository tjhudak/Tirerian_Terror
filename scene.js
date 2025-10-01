export class Scene {
    constructor(text, choices = []) {
        this.text = text;
        this.choices = choices;
    }
}

export class Choice {
    constructor(text, next = null, action = null) {
        this.text = text;
        this.next = next;
        this.action = action;
    }
}