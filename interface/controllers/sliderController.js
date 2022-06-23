var SliderController = /** @class */ (function () {
    function SliderController(model) {
        this.model = model;
    }
    SliderController.prototype.left = function () {
        if (this.model.current - 1 >= this.model.min) {
            this.model.current--;
        }
    };
    SliderController.prototype.right = function () {
        if (this.model.current + 1 <= this.model.max) {
            this.model.current++;
        }
    };
    SliderController.prototype.handle = function (key, chain) {
        var updatedChain = chain + " -> Slider<" + this.model.name + ">";
        console.log(updatedChain);
        if (key == "ArrowLeft") {
            this.left();
        }
        else if (key == "ArrowRight") {
            this.right();
        }
        console.log("New value of " + this.model.name + " is " + this.model.current);
    };
    return SliderController;
}());
