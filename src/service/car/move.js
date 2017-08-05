var GPIO = require("rpio2").Gpio;

var enableA = new GPIO(35);
var frontLeftGPIO1 = new GPIO(16);
var frontLeftGPIO2 = new GPIO(18);

var enableB = new GPIO(36);
var frontRightGPIO1 = new GPIO(38);
var frontRightGPIO2 = new GPIO(40);

function go() {
    enableA.open(GPIO.OUTPUT, GPIO.HIGH);
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.HIGH);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.LOW);

    enableB.open(GPIO.OUTPUT, GPIO.HIGH);
    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.HIGH);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.LOW);
}

function stop() {
    enableA.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.LOW);

    enableB.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.LOW);
}

function back() {
    enableA.open(GPIO.OUTPUT, GPIO.HIGH);
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.HIGH);

    enableB.open(GPIO.OUTPUT, GPIO.HIGH);
    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.HIGH);
}

module.exports.go = go;
module.exports.stop = stop;
module.exports.back = back;