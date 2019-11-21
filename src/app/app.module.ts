import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
// import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AboutDetailsComponent } from './about-details/about-details.component';

const appRoutes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'about-details', component: AboutDetailsComponent },
  { path: 'upload-page', component: FileUploaderComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideBarComponent,
    HomePageComponent,
    AboutPageComponent,
    TablePageComponent,
    FileUploaderComponent,
    AboutDetailsComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
