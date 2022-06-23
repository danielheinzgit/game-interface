class Slider implements Model {
    min: number;
    max: number;
    current: number;
    name: string;
    focused: boolean;
    view: SliderView;
    controller: SliderController;

    constructor(min: number, max: number, current: number, name: string, focused: boolean) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.current = current;
        this.focused = focused;

        this.view = new SliderView(this);
        this.controller = new SliderController(this);
    }

    display(): string {
        return this.view.display();
    }

    handle(key: string, chain: string): void {
        this.controller.handle(key, chain);
    }

    toString(): string {
        return "Slider: " + this.name + " [min: " + this.min + " current: " + this.current + ", max: " + this.max + "]";
    }
}