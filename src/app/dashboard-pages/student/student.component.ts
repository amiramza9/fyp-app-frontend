import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(){

  }
  
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  ngOnInit(): void {
    
  }
  model: student = new student();
}

  

  
