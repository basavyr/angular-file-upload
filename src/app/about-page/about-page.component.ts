import { Component, OnInit } from "@angular/core";
import { MENU } from "../side-bar/menu-list";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.css"],
 
})

export class AboutPageComponent implements OnInit{
  title = "CodeSandbox";
  menuList = MENU;
  
  ngOnInit(){
    
  }

}
