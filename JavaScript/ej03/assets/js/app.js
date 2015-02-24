(function() {
    var s1 = new App.Model.Shape(10, 10);

    console.log(s1.getX());
    console.log(s1.getY());

    s1.setX(15);
    s1.setY({});

    console.log(s1.getX());
    console.log(s1.getY());

    var c = new App.Model.Circle(5, 5, 1);
    c.getX();
    console.log(c);
    console.log(c.getX());
    console.log(c.getY());
    console.log(c.getRadius());
    console.log(c.getArea());


    var sq1 = new App.Model.Square(20, 20, 10);
    console.log(sq1);
    console.log(sq1.getX());
    console.log(sq1.getY());
    console.log(sq1.getWidth());
    console.log(sq1.getArea());

    var rect1 = new App.Model.Rectangle(20, 20, 10, 3);
    console.log(rect1);
    console.log(rect1.getX());
    console.log(rect1.getY());
    console.log(rect1.getWidth());
    console.log(rect1.getHeight());
    console.log(rect1.getArea());

})();
