import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tatble',
  templateUrl: './tatble.component.html',
  styleUrls: ['./tatble.component.css']
})
export class TatbleComponent implements OnInit {
  idEdit = null;
  dataEdit: {
    id: 0,
    name: "",
      level: '0',
      status:'',
      created_on:''
  };
  @Input() data: Array<any>;
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  
    constructor() {
	console.log(this);
    }

  ngOnInit(): void { }

  clickEdit(item){
      const { id, name, level, status, created_on} = item;
      this.idEdit = id;
      this.dataEdit = { id, name, level, status , created_on};
  }

  editSubmit(){
    this.editTask.emit({
      id: this.idEdit,
      ...this.dataEdit
    });

    this.idEdit = null;
  }

}
