class SliderView implements View {
    model: Slider;

    constructor(model: Slider) {
        this.model = model;
    }

    generateUniqueId(): string {
        return 'slider-' + this.model.name;
    }

    display(): string {
        let result: string = "";
        result += "<div class='slider-container'>";
        result += "<input id='" + this.generateUniqueId() + "'type='range' min='" + this.model.min + "' max='" + this.model.max + "' value='" + this.model.current + "'>";
        result += "</div>";
        return result;
    }
}