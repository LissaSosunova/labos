import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public activate(event: any): void {
    if (event) {
      window.scroll(0, 0);
    }
  }
}
