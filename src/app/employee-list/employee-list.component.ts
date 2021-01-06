import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 Emplist:any[];
  constructor() {
    this.Emplist=[
      {EmpCode:101,FirstName:"Nadhiya",SecondName:"Vijayakumar",Gender:"Female",Age:27},
       {EmpCode:102,FirstName:"Manjula",SecondName:"Vijayakumar",Gender:"Female",Age:48},
       {EmpCode:103,FirstName:"Vishnu",SecondName:"Vijayakumar",Gender:"male",Age:20},
       {EmpCode:104,FirstName:"Vijayakumar",SecondName:"Kuppuraj",Gender:"male",Age:48},
   ];
   }

  ngOnInit(): void {
  }
getEmplist(){
  this.Emplist=[
    {EmpCode:101,FirstName:"Nadhiya",SecondName:"Vijayakumar",Gender:"Female",Age:27},
    {EmpCode:102,FirstName:"Manjula",SecondName:"Vijayakumar",Gender:"Female",Age:48},
    {EmpCode:103,FirstName:"Vishnu",SecondName:"Vijayakumar",Gender:"male",Age:20},
    {EmpCode:104,FirstName:"Vijayakumar",SecondName:"Kuppuraj",Gender:"male",Age:48},
    {EmpCode:105,FirstName:"Tom",SecondName:"Joseph",Gender:"male",Age:48},
  ];
}
  
trackByFirstName(index:number,Emplist:any)
{
  return Emplist.FirstName;
}
}
