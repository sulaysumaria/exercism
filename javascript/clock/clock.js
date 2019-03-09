class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour;
    this.minute = minute;

    // compute hour and minute for wrapping, negatives, etc
    this.setHourAndMinute();
  }

  setHourAndMinute() {
    // Add hours from extra minutes
    this.hour += Math.floor(this.minute / 60);

    // remove more than one days
    this.hour %= 24;

    // if negative, add to 24
    if (this.hour < 0) {
      this.hour = 24 + this.hour;
    }

    // get exact minutes after removing days
    this.minute %= 60;

    // if negative, add to 60
    if (this.minute < 0) {
      this.minute = 60 + this.minute;
    }
  }

  toString() {
    // return string format of time. 00:00
    return `${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}`;
  }

  plus(minutes) {
    // add minutes
    this.minute += minutes;

    // reset hour and minute
    this.setHourAndMinute();

    return this;
  }

  minus(minutes) {
    // subtract minutes
    this.minute -= minutes;

    // reset hour and minutes
    this.setHourAndMinute();

    return this;
  }

  equals(clock) {
    // the string of both the clock should be same in order for the clocks to be same
    return this.toString() === clock.toString();
  }
}

module.exports = {
  Clock,
};
