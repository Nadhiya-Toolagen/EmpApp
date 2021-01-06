import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp-detail-component',
  templateUrl: './emp-detail-component.component.html',
  styleUrls: ['./emp-detail-component.component.css']
})
export class EmpDetailComponentComponent implements OnInit {
   FirstName : string ="Tom";
   SecondName: string="joseph";
   Gender:string="male";
   Age:number=28;
  colspan:number=2;
   showDetails:boolean=false;
   isBold:boolean=true;
   isItalic:boolean=true;
   fontsize:number=30;
  constructor() { }

  ngOnInit(): void {
  }
  getFullName():string{
    return this.FirstName +this.SecondName;
  }

  toggleDetails():void{
    this.showDetails=!this.showDetails;
  }
  applyClass(){
    let classes={
      ItalicClass : this.isItalic,
      BoldClass:this.isBold,
    };
    return classes;
  }
  applyStyle(){
    let Style={
      'font-size.px':this.fontsize,
    }
    return Style;
  }

}
