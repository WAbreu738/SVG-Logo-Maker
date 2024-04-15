const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render method returns correct SVG string', () => {
    const circle = new Circle('Title', 'black', 'red');
    const expectedSVG = `<circle cx="150" cy="110" r="80" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Title</text>`;
    expect(circle.renderSVG()).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
  test('render method returns correct SVG string', () => {
    const triangle = new Triangle('Title', 'black', 'green');
    const expectedSVG = `<polygon points="150,20 50,180 250,180" fill="green"/><text x="150" y="148" font-size="60" text-anchor="middle" fill="black">Title</text>`;
    expect(triangle.renderSVG()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('render method returns correct SVG string', () => {
    const square = new Square('Title', 'black', 'blue');
    const expectedSVG = `<rect x="40" y="40" width="200" height="200" fill="blue"/><text x="140" y="135" font-size="60" text-anchor="middle" fill="black">Title</text>`;
    expect(square.renderSVG()).toEqual(expectedSVG);
  });
});
