import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../_state/todos.service';
import { TodosQuery } from '../_state/todos.query';
import { initialFilters, VisibilityFilter } from '../filter/filter.model';
import { Todo } from '../_state/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  @Input() todos!: Todo[];
  todos$: Observable<Todo[]> = this.todosQuery.selectVisibleTodos$;
  activeFilter$!: Observable<VisibilityFilter>;
  filters = initialFilters


  newTask = '';

  constructor(private todosService: TodosService, private todosQuery: TodosQuery) {
  }

  ngOnInit(): void {
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }

  add() {
    if(!this.newTask) return;
    
    this.todosService.add(this.newTask)
    this.newTask = '';  
  }

  delete(id: string) {
    this.todosService.delete(id)
  }

  complete(todo: Todo) {
    this.todosService.complete(todo)
  }

  changeFilter(filter: VisibilityFilter) {
    this.todosService.updateFilter(filter)
  }

}
