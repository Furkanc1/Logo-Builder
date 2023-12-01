// This will create a shapes backround, will be used through importing the shapes.test.js File
class baseShape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
// Will take the inputted shape, and fill in the backround using the (USER INPUT) Color.
class Circle extends baseShape{
  render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
};

class Triangle extends Shape {
  render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };