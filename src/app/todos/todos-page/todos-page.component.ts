import { Component, OnInit } from '@angular/core';
import { TodosService } from '../_state/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  add(input: any) {
    this.todosService.add(input.value);
    input.value = '';
  }

}
