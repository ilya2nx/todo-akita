import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';

export interface TodosState extends EntityState<Todo> {
   key: string;
}

export function createInitialState(): TodosState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo' })
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super(createInitialState());
  }

}

