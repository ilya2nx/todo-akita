import { Injectable } from '@angular/core';
import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';
import { VisibilityFilter } from '../filter/filter.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VisibilityFilter) {
    this.todosStore.update({
      ui: {
        filter
      }
    })
  }

  add(title: string) {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: string) {
    this.todosStore.remove(id)
  }

  complete({id, completed}: Todo) {
    this.todosStore.update(id, {completed})
  }
}
