import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { VisibilityFilter } from '../filter/filter.model';
import { Todo } from './todo.model';
import { TodosStore, TodosState } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$: Observable<Todo[]> = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );
  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter: string, todos: Todo[]): Todo[] {
    switch (filter) {
      case VisibilityFilter.show_completed:
        return todos.filter((t: { completed: any; }) => t.completed);
      case VisibilityFilter.show_active:
        return todos.filter((t: { completed: any; }) => !t.completed);
      default:
        return todos;
    }
  }

}