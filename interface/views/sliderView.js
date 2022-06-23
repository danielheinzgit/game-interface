var SliderView = /** @class */ (function () {
    function SliderView(model) {
        this.model = model;
    }
    SliderView.prototype.generateUniqueId = function () {
        return 'slider-' + this.model.name;
    };
    SliderView.prototype.display = function () {
        var result = "";
        result += "<div class='slider-container'>";
        result += "<input id='" + this.generateUniqueId() + "'type='range' min='" + this.model.min + "' max='" + this.model.max + "' value='" + this.model.current + "'>";
        result += "</div>";
        return result;
    };
    return SliderView;
}());
