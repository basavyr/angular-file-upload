import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MENU } from "./menu-list";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  @Output() expand = new EventEmitter<boolean>();
  title = "CodeSandbox";
  isWordMenu = "isWordMenu";
  isIcon = "isNotIcon";

  menuList = MENU;

  ngOnInit() {}

  onExpandMenu(expanded: boolean) {
    this.isWordMenu =
      this.isWordMenu === "isNotWordMenu" ? "isWordMenu" : "isNotWordMenu";
    this.isIcon = this.isIcon === "isNotIcon" ? "isIcon" : "isNotIcon";
    this.expand.emit(expanded);
  }
}
