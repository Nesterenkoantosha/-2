export class ShoppingItem {
    constructor(text) {
        this.text = text;
        this.done = false;
    }

    toggle() {
        this.done = !this.done;
    }
}
