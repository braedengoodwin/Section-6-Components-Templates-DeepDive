import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent implements OnInit, OnDestroy {
  // what we're doing in currentStatus is known as "Literal Types", it's a typescript feature
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
