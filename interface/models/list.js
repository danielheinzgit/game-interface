/**
 *
 */
var List = /** @class */ (function () {
    function List(name, focused) {
        this.name = name;
        this.focused = focused;
        this.elements = [];
        this.focusIndex = -1;
        this.previousFocusIndex = -1;
        this.view = new ListView(this);
        this.controller = new ListController(this);
    }
    List.prototype.push = function (element) {
        if (this.isEmpty() && this.focused == true) {
            this.focusIndex = 0;
        }
        else if (this.isEmpty() && this.focused == false) {
            this.previousFocusIndex = 0;
        }
        this.elements.push(element);
    };
    List.prototype.pop = function () {
        return this.elements.pop();
    };
    List.prototype.display = function () {
        return this.view.display();
    };
    List.prototype.handle = function (key, chain) {
        this.controller.handle(key, chain);
    };
    List.prototype.get = function (index) {
        return this.elements[index];
    };
    List.prototype.size = function () {
        return this.elements.length;
    };
    List.prototype.isEmpty = function () {
        if (this.size() == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    List.prototype.toString = function () {
        return "List: " + this.name + " containing " + this.size() + "elements\n" + this.elements.toString();
    };
    return List;
}());
