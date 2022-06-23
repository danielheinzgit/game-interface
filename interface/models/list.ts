/**
 * 
 */
class List implements Model {
    name: string;
    focused: boolean;
    elements: Array<Model>;
    focusIndex: number;
    previousFocusIndex: number;

    view: ListView;
    controller: ListController;

    constructor(name: string, focused: boolean) {
        this.name = name;
        this.focused = focused;
        this.elements = [];
        this.focusIndex = -1;
        this.previousFocusIndex = -1;
        this.view = new ListView(this);
        this.controller = new ListController(this);
    }

    push(element: Model) {
        if (this.isEmpty() && this.focused == true) {
            this.focusIndex = 0;
        } else if (this.isEmpty() && this.focused == false) {
            this.previousFocusIndex = 0;
        }
        this.elements.push(element);
    }

    pop(): Model {
        return this.elements.pop();
    }

    display(): string {
        return this.view.display();
    }

    handle(key: string, chain: string): void {
        this.controller.handle(key, chain);
    }

    get(index: number): Model {
        return this.elements[index];
    }

    size(): number {
        return this.elements.length;
    }

    isEmpty(): boolean {
        if (this.size() == 0) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        return "List: " + this.name + " containing " + this.size() + "elements\n" + this.elements.toString();
    }
}