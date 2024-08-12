class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    return this.radius * this.radius * Math.PI;
  }

  paint() {
    console.log(`paint with color : ${this.color}`);
  }
}

const circleObject = new Circle(10, "blue");
console.log(circleObject.area());
circleObject.paint();
