var App = App || {
    Model: {}
};
App.Model.Circle = (function() {

    var _rad;

    function Circle(x, y, rad) {
        App.Model.Shape.call(this, x, y);
        //App.Model.Shape.apply(this, [x, y]);
        //App.Model.Shape.call(this)(x, y);


        _rad = (typeof rad === 'number' && rad>0) ? rad : 0;
    }

    Circle.prototype = Object.create(App.Model.Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.getRadius = function() {
        return _rad;
    };
    Circle.prototype.setRadius = function(rad) {
        _rad = (typeof rad === 'number') ? rad : _rad;
    };

    Circle.prototype.getArea = function() {
        return Math.PI * Math.pow(_rad, 2);
    };

    return Circle;
})();
