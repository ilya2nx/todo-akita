import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../_state/todos.service';
import { TodosQuery } from '../_state/todos.query';
import { initialFilters } from '../filter/filter.model';
import { Todo } from '../_state/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  filters = initialFilters

  items!: Observable<Todo[]>;

  newTask = '';

  constructor(private todosService: TodosService, private todosQuery: TodosQuery) {
  }

  ngOnInit(): void {
    this.items = this.todosQuery.selectAll();
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
