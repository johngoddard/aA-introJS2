class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    const hourString = (this.hours < 10) ? `0${this.hours}` : `${this.hours}`;
    const minuteString = (this.minutes < 10) ? `0${this.minutes}` : `${this.minutes}`;
    const secondString = (this.seconds < 10) ? `0${this.seconds}` : `${this.seconds}`;

    let time = `${hourString}:${minuteString}:${secondString}`;
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if(this.seconds === 59){
      if(this.minutes === 59){
        this.minutes = 0;
        this.hours ++;
      } else{
        this.minutes++;
      }
      this.seconds = 0;
    }else{
      this.seconds++;
    }
    this.printTime();
    // setInterval(clock._tick, 1000);
  }
}

const clock = new Clock();
