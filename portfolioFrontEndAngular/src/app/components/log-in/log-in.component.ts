import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group({
       
    })
  }

  ngOnInit(): void {
  }

}
