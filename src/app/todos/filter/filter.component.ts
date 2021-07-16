import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoFilter, VisibilityFilter } from './filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() active!: VisibilityFilter
  @Input() filters: TodoFilter[] = [];
  @Output() update = new EventEmitter<VisibilityFilter>();

  selectedTodo: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
