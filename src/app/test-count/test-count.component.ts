import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-count',
  templateUrl: './test-count.component.html',
  styleUrls: ['./test-count.component.css']
})
export class TestCountComponent implements OnInit {
  selectedValue:string="All";
  @Input()
  All:number=10;
  @Input()
  Female:number=10;;
  @Input()
  Male:number=5;
  constructor() { }
  @Output()
  OnSelect:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }

  setSelectValue(){
    this.OnSelect.emit(this.selectedValue);
    
  }

}
