import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  student: any[];
  SelectedRadioValue:string="All";
  
  constructor() { 
    this.student=[
      { Rollno:1001,Name:"Ammu",DOB:"10/11/1998",Gender:"Female"},
      { Rollno:1002,Name:"Appu",DOB:"5/10/1998",Gender:"Male"},
      { Rollno:1003,Name:"Raju",DOB:"6/12/1998",Gender:"Male"},
    ];
  }

  ngOnInit(): void {
  }
  getTotal():number{
    return this.student.length;
  }
  getfemaleTotal():number{
    return this.student.filter(e=>e.Gender==='Female').length;
  }
  getmaleTotal():number{
    return this.student.filter(e=>e.Gender==='Male').length;
  }

  OnSelectedRadioChange(SelectValue:string){
    this.SelectedRadioValue=SelectValue;
  }

}
