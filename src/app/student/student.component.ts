import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StuService } from './stu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent { 

  public response:any; 

  constructor(public service:StuService,private http:HttpClient) { 
     
  }


  
}
