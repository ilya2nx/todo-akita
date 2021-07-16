import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../_state/todos.service';
import { initialFilters } from '../filter/filter.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  filters = initialFilters

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
