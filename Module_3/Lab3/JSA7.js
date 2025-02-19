// Base DigitalClock class
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer);
        console.log(`${this.prefix} Clock stopped.`);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}


class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}


class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = "07:00") {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }

    display() {
        let date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        
        let currentTime = `${hours}:${mins}`;
        
        if (currentTime === this.wakeupTime) {
            console.log(`${this.prefix} Wake Up!`);
            this.stop();
        } else {
            super.display();
        }
    }
}


const myClock = new DigitalClock('Standard Clock:');
myClock.start();
setTimeout(() => myClock.stop(), 5000); 

const preciseClock = new PrecisionClock('Precise Clock:', 500);
preciseClock.start();
setTimeout(() => preciseClock.stop(), 5000);

const alarmClock = new AlarmClock('Alarm Clock:', "07:00"); 
alarmClock.start();
