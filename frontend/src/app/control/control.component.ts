import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Output() createClick = new EventEmitter();
  @Output() handleFilter = new EventEmitter();
  @Input() control: {
    name: string;
    sort: string;
  };
  constructor() { }

  ngOnInit(): void {
    
  }

  changeSearch(key, value){
    this.handleFilter.emit({key, value})
  }

}
