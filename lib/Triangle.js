const Shape = require("./Shape.js");

class Triangle extends Shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="250,100 400,400 100,400" fill="${this.color}" />
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
            </svg>`
    }
}
module.exports = Triangle;
