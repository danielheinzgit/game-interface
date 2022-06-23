var Slider = /** @class */ (function () {
    function Slider(min, max, current, name, focused) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.current = current;
        this.focused = focused;
        this.view = new SliderView(this);
        this.controller = new SliderController(this);
    }
    Slider.prototype.display = function () {
        return this.view.display();
    };
    Slider.prototype.handle = function (key, chain) {
        this.controller.handle(key, chain);
    };
    Slider.prototype.toString = function () {
        return "Slider: " + this.name + " [min: " + this.min + " current: " + this.current + ", max: " + this.max + "]";
    };
    return Slider;
}());
