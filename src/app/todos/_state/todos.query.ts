import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends Query<TodosState> {

  constructor(protected store: TodosStore) {
    super(store);
  }

}
