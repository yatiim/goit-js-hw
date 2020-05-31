'use strict';

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {

  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      this.time = this.targetDate.getTime() - currentTime;
      this.updateTime(this.time);
    }, 1000);
  }
}


const timer = new CountdownTimer('#timer-1', new Date('Jan 1, 2021'));

timer.start();