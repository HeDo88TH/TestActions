var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dist = function (other) {
        return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
    };
    return Point;
}());
var a = new Point(0, 2);
var b = new Point(3, 0);
var m = (b.y - a.y) / (b.x - a.x);
//let t: Point = new Point(1, 4.0 / 3.0);
var t = new Point(3, 0);
console.log(a, b, m, t);
var d = a.dist(b);
var dt = a.dist(t);
var perc = dt / d;
console.log(dt, perc, d);
var a1 = new Point(0, 1);
var b1 = new Point(3, 2);
var m1 = (b1.y - a1.y) / (b1.x - a1.x);
console.log(a1, b1, m1);
var d1 = a1.dist(b1);
var dt1 = d1 * perc;
var t1 = new Point((b1.x - a1.x) * perc + a1.x, (b1.y - a1.y) * perc + a1.y);
console.log(dt1, d1, t1);
var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}
varDeclaration();
