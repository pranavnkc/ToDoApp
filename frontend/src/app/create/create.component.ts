import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  isCreate = false;
  isSubmit = false;
  @Output() createClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.isSubmit = true;
    if(form.valid){
      this.createClick.emit(form.value);
      this.isSubmit = false;
      this.isCreate = false;
    }
  }
}
