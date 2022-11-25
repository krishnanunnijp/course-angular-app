import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseAddComponent } from './course-add/course-add.component';

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
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
