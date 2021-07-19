import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../_state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@Input() todo!: Todo;
@Output() delete = new EventEmitter<string>();
@Output() complete = new EventEmitter<Todo>();

control!: FormControl


  constructor() { }


  ngOnInit(): void { 
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    })
  }
}
