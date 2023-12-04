// Constructor method to take in user inputs for text and shape
class SVG {
  constructor() {
    this.textInput = "";
    this.shapeInput = "";
  }
// Uses Render method to generate the Users 3 letters for the logo
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeInput}${this.textInput}</svg>`;
  }

// Set the text for the logo, ensuring it does not exceed 3 characters
  setText(threeLetterMessage, color) {
    if (threeLetterMessage.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

  // Formats the users 3 letter input
    this.textInput = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${threeLetterMessage}</text>`;
  }

  // creates the logos shape using the choice of the user (1/3)
  setLogoShape(logoShape) {
// Get the SVG representation of the logo shape
    this.shapeInput = logoShape.render();
  }
}

module.exports = SVG;