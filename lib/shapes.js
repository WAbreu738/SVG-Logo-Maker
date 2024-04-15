class Shape {
    constructor(title, textColor, shapeColor) {
        this.title = title;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
    }

    renderSVG() {
        return `<circle cx="150" cy="110" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

class Triangle extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
    }

    renderSVG() {
        return `<polygon points="150,20 50,180 250,180" fill="${this.shapeColor}"/><text x="150" y="148" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

class Square extends Shape {
    constructor(title, textColor, shapeColor) {
        super(title, textColor, shapeColor);
    }

    renderSVG() {
        return `<rect x="40" y="40" width="200" height="200" fill="${this.shapeColor}"/><text x="140" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>`;
    }
}

function generateSVG(data) {
    let shapeSVG;
    switch (data.shape) {
        case 'Circle':
            shapeSVG = new Circle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Triangle':
            shapeSVG = new Triangle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Square':
            shapeSVG = new Square(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        default:
            shapeSVG = '';
            break;
    }

    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
        </svg>`;
}

module.exports = {generateSVG, Circle, Triangle, Square}





