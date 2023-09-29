const Shape = require("./Shape.js");

class Square extends Shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="400" height="400" fill="${this.color}" />
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
            </svg>`;
    }
}

module.exports = Square;
