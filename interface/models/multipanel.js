var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Multipanel = /** @class */ (function (_super) {
    __extends(Multipanel, _super);
    function Multipanel(name) {
        var _this = _super.call(this, name) || this;
        _this.panels = [];
        _this.view = new MultipanelView(_this);
        _this.controller = new MultipanelController(_this);
        return _this;
    }
    Multipanel.prototype.display = function () {
        return this.view.display();
    };
    Multipanel.prototype.push = function (panel) {
    };
    Multipanel.prototype.numberOfPanels = function () {
        return this.panels.length;
    };
    Multipanel.prototype.handle = function (key, chain) {
        this.controller.handle(key, chain);
    };
    Multipanel.prototype.toString = function () {
        return "Multipanel <" + this.name + ">" + this.panels.toString();
    };
    return Multipanel;
}(Layout));
