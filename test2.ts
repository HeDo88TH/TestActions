
class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public dist(other: Point) {
        return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
    }
}


let a: Point = new Point(0, 2);
let b: Point = new Point(3, 0);
let m: number = (b.y - a.y) / (b.x - a.x);
//let t: Point = new Point(1, 4.0 / 3.0);
let t: Point = new Point(3, 0);

console.log(a, b, m, t);

let d = a.dist(b);
let dt = a.dist(t);
let perc = dt / d;

console.log(dt, perc, d);

let a1 = new Point(0, 1);
let b1 = new Point(3, 2);

let m1: number = (b1.y - a1.y) / (b1.x - a1.x);

console.log(a1, b1, m1);

let d1 = a1.dist(b1);
let dt1 = d1 * perc;

let t1: Point = new Point((b1.x - a1.x) * perc + a1.x, (b1.y - a1.y) * perc + a1.y);

console.log(dt1, d1, t1);


