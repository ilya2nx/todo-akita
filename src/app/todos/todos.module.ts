import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";

import {ButtonModule} from 'primeng/button';
import { FilterComponent } from "./filter/filter.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TodosPageComponent } from "./todos-page/todos-page.component";
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    TodoComponent,
    TodosPageComponent,
    FilterComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    CommonModule,
    FormsModule
  ]
})

export class TodosModule {

}