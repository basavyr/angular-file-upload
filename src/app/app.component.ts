import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  isSidebarExpand = true;
  containerStyle = "isExpand";

  ngOnInit() {}

  onSidebarExpand(expand: boolean) {
    this.isSidebarExpand = expand;
    this.containerStyle = this.isSidebarExpand ? "isExpand" : "isNotExpand";
  }
}
