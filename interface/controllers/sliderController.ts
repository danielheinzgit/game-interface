class SliderController implements Controller {
    model: Slider;

    constructor(model: Slider) {
        this.model = model;
    }

    left(): void {
        if (this.model.current - 1 >= this.model.min) {
            this.model.current--;
        }
    }

    right(): void {
        if (this.model.current + 1 <= this.model.max) {
            this.model.current++;
        }
    }

    handle(key: string, chain: string): void {
        let updatedChain = chain + " -> Slider<" + this.model.name + ">";
        console.log(updatedChain);
        if (key == "ArrowLeft") {
            this.left();
        } else if (key == "ArrowRight") {
            this.right();
        }
        console.log("New value of " + this.model.name + " is " + this.model.current);
    }
}