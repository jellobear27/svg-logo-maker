const Shape = require("/Shape.js");

class square extends Shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
            <square cx="250" cy="250 r="250" fill="${this.color}" />
            <text fill="${this.textcolor}" font-size="75" x="172" y="250">${this.text}</text>
            </svg>`
    }
}
moudule.exports = square;