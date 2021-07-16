import { Component, Input } from "@angular/core";
import { Todo } from "./_state/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TodosComponent {
@Input() todos!: Todo[];

}