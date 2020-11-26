import { Subject, interval } from 'rxjs';
import { measures } from './index';

export default class Emitter {
  constructor() {
    this.data = {
      [measures.temperature]: new Date(),
      [measures.airPressure]: new Date(),
      [measures.humidity]: new Date(),
    };
    this.subject = new Subject();
    this.init();

    return this.subject;
  }

  init() {
    this.temperature();
    this.airPressure();
    this.humidity();

    interval(1000).subscribe(() => {
      const currentDate = new Date();

      for (const measure in this.data) {
        if ((currentDate.getTime() - this.data[measure].getTime()) >= 1000) {
          this.subject.next({ [measure]: 'N/A' });
        }

        this.data[measure] = currentDate;
      }
    });
  }

  sendData(measure, value) {
    this.subject.next({ [measure]: value });
  }

  getInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  temperature() {
    interval(this.getInterval(100, 2000)).subscribe(() => this.sendData(measures.temperature, Math.random()));
  }

  airPressure() {
    interval(this.getInterval(100, 2000)).subscribe(() => this.sendData(measures.airPressure, Math.random()));
  }

  humidity() {
    interval(this.getInterval(100, 2000)).subscribe(() => this.sendData(measures.humidity, Math.random()));
  }
}
