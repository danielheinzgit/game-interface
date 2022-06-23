class ListController implements Controller {
    model: List;

    constructor(model: List) {
        this.model = model;
    }

    focusItem(newIndex: number) {
        if (this.model.isEmpty()) {
            // an empty list always has the focusIndex of -1
            console.log("The list is empty");
            this.model.focusIndex = -1;
        } else {
            console.log(this.model.elements + " " + this.model.focusIndex);
            this.model.elements[this.model.focusIndex].focused = false;
            if (newIndex >= 0 && newIndex < this.model.size()) {
                // if [0 <= focusIndex < size()], just set the focus index
                this.model.focusIndex = newIndex;
            } else if (newIndex < 0) {
                // if [focusIndex < 0], go around by going to the last element
                this.model.focusIndex = this.model.size() - 1;
            } else if (newIndex >= this.model.size()) {
                // if [size <= focusIndex], go around by going to the first element
                this.model.focusIndex = 0;
            }
            this.model.elements[this.model.focusIndex].focused = true;
        }
    }

    focus() {
        if (!this.model.isEmpty() && this.model.previousFocusIndex != -1) {
            this.model.focusIndex = this.model.previousFocusIndex;
        } else if (!this.model.isEmpty() && this.model.previousFocusIndex == -1) {
            this.model.focusIndex = 0;
        }
    }

    unfocus() {
        this.model.focused = false;
        this.model.previousFocusIndex = this.model.focusIndex;
        this.model.focusIndex = -1;
    }

    up() {
        this.focusItem(this.model.focusIndex-1);
    }

    down() {
        this.focusItem(this.model.focusIndex+1);
    }

    handle(key: string, chain: string): void {
        let updatedChain = chain + " -> List<" + this.model.name + ">";
        console.log(updatedChain);
        let focusIndex: number = this.model.focusIndex;
        if (key == "s" || key == "ArrowDown") {
            this.down();
            console.log(this.model.focusIndex);
        } else if (key == "w" || key == "ArrowUp") {
            this.up();
            console.log(this.model.focusIndex);
        } else {
            // any key that is not 's' or 'w' or 'ArrowDown' or 'ArrowUp'
            this.model.get(focusIndex).handle(key, updatedChain);
        }
    }
}