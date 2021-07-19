import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VisibilityFilter } from '../filter/filter.model';
import { Todo } from './todo.model';


export interface TodosState extends EntityState<Todo, string> { 
  ui: {
    filter: VisibilityFilter
  };
}

const initialState = {
  ui: { filter: VisibilityFilter.show_all }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {
  constructor() {
    super(initialState) ;
  }
}


