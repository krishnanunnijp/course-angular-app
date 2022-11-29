import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseNavbarComponent } from './course-navbar/course-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

const myRoute: Routes=[
  {
    path: "",
    component: CourseViewComponent
  },
  {
    path: "add",
    component: CourseAddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseViewComponent,
    CourseAddComponent,
    CourseNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
