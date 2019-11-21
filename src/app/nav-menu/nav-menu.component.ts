import { Component, OnInit } from "@angular/core";
import { MENU } from "../side-bar/menu-list";
import { Router, NavigationEnd } from "@angular/router";

import * as $ from 'jquery';

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"]
})
export class NavMenuComponent implements OnInit {
  title = "CodeSandbox";
  menuList = MENU;

  constructor(router: Router) {
    router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        $(".navbarMenu.collapse").collapse("hide");
      }
    });
  }

  ngOnInit() {}

  onClick() {
    $(".collapse").collapse("hide");
  }
}
