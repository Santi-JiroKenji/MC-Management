import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  classApplied = false;
  classActive = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  activeButton = 1;

  btnActive(event) {
    this.activeButton = event;
  }

}
