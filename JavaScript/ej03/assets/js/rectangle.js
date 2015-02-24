var App = App || {
    Model: {}
};
App.Model.Rectangle = (function() {

    var _height;

    function Rectangle(x, y, width, height) {
        App.Model.Square.call(this, x, y, width);
        //App.Model.Shape.apply(this, [x, y]);
        //App.Model.Shape.call(this)(x, y);


        _height = (typeof height === 'number' && height>0) ? height : 0;
    }

    Rectangle.prototype = Object.create(App.Model.Square.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.getHeight = function() {
        return _height;
    };
    Rectangle.prototype.setHeight = function() {
        _height = (typeof height === 'number') ? height : _height;
    };

    Rectangle.prototype.getArea = function() {
    	return _height * this.getWidth();
    	/*Si hubiera que invocar a la funcion del padre, por ejemplo porque
    	se llama igual que el que estamos definiendo, se haria asi:*/
    	//return _height * App.Model.Square.prototype.getWidth.call(this);
        
    };

    return Rectangle;
})();
