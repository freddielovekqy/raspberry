var GPIO = require("rpio2").Gpio;

var frontLeftGPIO1 = new GPIO(16);
var frontLeftGPIO2 = new GPIO(18);

var frontRightGPIO1 = new GPIO(38);
var frontRightGPIO2 = new GPIO(40);

function go() {
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.HIGH);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.LOW);

    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.HIGH);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.LOW);
}

function stop() {
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO1.close();
    frontLeftGPIO2.close();
    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO1.close();
    frontRightGPIO2.close();
}

function back() {
    frontLeftGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontLeftGPIO2.open(GPIO.OUTPUT, GPIO.HIGH);

    frontRightGPIO1.open(GPIO.OUTPUT, GPIO.LOW);
    frontRightGPIO2.open(GPIO.OUTPUT, GPIO.HIGH);
}

module.exports.go = go;
module.exports.stop = stop;
module.exports.back = back;
