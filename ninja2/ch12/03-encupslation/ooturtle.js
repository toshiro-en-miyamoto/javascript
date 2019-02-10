class Turtle
{
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.setColor = color => {
            return _color = color;
        };
        this.getColor = () => _color;
    }
}

module.exports = Turtle;