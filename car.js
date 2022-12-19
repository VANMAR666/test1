function Car(name) {
    this.name = name;
    this.TurnOn = false;
    this.speed = 0;
    this.engine = {
        v: 1.6,
        horsesPower: 200,
        isTurnOn: false
    };
}

Car.prototype.start = function () {
    this.TurnOn = true;
    this.speed = 10;
    this.engine.isTurnOn = true;
    console.log(this.name + ' ' + this.speed);
};