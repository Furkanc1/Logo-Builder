class LogoGenerator {
  async run() {
    try {
      const userInput = await inquirer.prompt([
        {
          name: "text",
          type: "input",
          message: "Enter text for the logo (up to 3 characters):",
          validate: (text) =>
            text.length <= 3 || "The message must not contain more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a text color:",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo:",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color:",
        },
      ]);

      const { text, textColor, shapeType, shapeColor } = userInput;

      const shape = this.createShape(shapeType);
      shape.setColor(shapeColor);

      const svg = this.createSVG();
      svg.setText(text, textColor);
      svg.setShape(shape);

      await this.saveLogo(svg.render());

      console.log("Generated logo.svg");
    } catch (error) {
      console.log(error);
      console.log("Oops! Something went wrong.");
    }
  }

  createShape(shapeType) {
    switch (shapeType) {
      case "circle":
        return new Circle();

      case "square":
        return new Square();

      default:
        return new Triangle();
    }
  }

  createSVG() {
    return new SVG();
  }

  async saveLogo(data) {
    await fs.writeFile("logo.svg", data);
  }
}

module.exports = LogoGenerator;
