import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoFilter, VisibilityFilter } from './filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() active!: VisibilityFilter | null ;
  @Input() filters: TodoFilter[] = [];
  @Output() update = new EventEmitter<VisibilityFilter>();

  selectedTodo: string = '';

  control!: FormControl;

  constructor() {

  }

  ngOnInit(): void {
    this.control = new FormControl(this.active);

    this.control.valueChanges.subscribe(c => {
      this.update.emit(c);
    });
  }

}
