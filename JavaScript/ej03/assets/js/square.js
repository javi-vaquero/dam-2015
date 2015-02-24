var App = App || {
    Model: {}
};
App.Model.Square = (function() {

    var _width;

    function Square(x, y, side) {
        App.Model.Shape.call(this, x, y);
        //App.Model.Shape.apply(this, [x, y]);
        //App.Model.Shape.call(this)(x, y);


        _width = (typeof side === 'number' && side>0) ? side : 0;
    }

    Square.prototype = Object.create(App.Model.Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.getWidth = function() {
        return _width;
    };
    Square.prototype.setWidth = function() {
        _width = (typeof side === 'number') ? side : _width;
    };

    Square.prototype.getArea = function() {
        return _width * _width;
    };

    return Square;
})();
