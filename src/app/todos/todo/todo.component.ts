import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../_state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  control!: FormControl;

@Input() todos: Todo[] = [];
@Input() todo!: Todo;


  constructor() { }


  ngOnInit(): void { 
  }
}
