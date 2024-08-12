class Rectangle {
  constructor(width, height, paint) {
    this.width = width;
    this.height = height;
    this.color = paint;
  }

  area() {
    let area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`paint with color ${this.color}`);
  }
}

const rect = new Rectangle(3, 4, "blue");
let area = rect.area();
console.log(area);
rect.paint();
