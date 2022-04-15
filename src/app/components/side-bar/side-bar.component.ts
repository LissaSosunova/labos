import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  openedMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.openedMenu = !this.openedMenu;
  }
}
