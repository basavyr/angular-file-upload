import { Component, OnInit } from '@angular/core';
import { MENU } from '../side-bar/menu-list';

@Component({
  selector: 'app-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {
  title = 'CodeSandbox';
  menuList = MENU;

  ngOnInit() {}
}
