import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""
  readValue= ()=>
  {
   let data :any = {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
   console.log(data)
   this.api.addCourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=='success'){
        alert("successfully added")
        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue=""
      }else{
        alert("something went wrong")
      }
    }
   )
  }
constructor(private api:ApiService){ }


}
