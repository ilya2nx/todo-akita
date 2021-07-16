import { Component, OnInit } from '@angular/core';
import { TodosService } from '../_state/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  items = [];

  newTask = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  // add(input: HTMLInputElement) {
  //   this.todosService.add(input.value);
  //   input.value = '';
  // }

  add() {
    if(!this.newTask) return;
    
    this.todosService.add(this.newTask)
    this.newTask = '';  
  }

}
