import { EventEmitter } from "@angular/core";
import { Component, Input, Output } from "@angular/core";
import { Todo } from "./_state/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent {
@Input() todos: Todo[] | null = []; //здесь пришлось написать такую конструкцию, потому что в todos-page <app-todos [todos]="todos$ | async"></app-todos> без | null появляется ошибка, которую получилось решить только таким способом
@Output() delete = new EventEmitter<string>();
@Output() complete = new EventEmitter<Todo>();

trackByFn(index: any, todo: any) {
  return todo.id;
}

}