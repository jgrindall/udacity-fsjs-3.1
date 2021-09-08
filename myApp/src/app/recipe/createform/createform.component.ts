import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../../types";

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  title:string = "Title";
  body:string = "Body";

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(){
    alert(this.title + " " + this.body);
    this.onSubmit.emit({title:this.title, body:this.body});
  }

}
