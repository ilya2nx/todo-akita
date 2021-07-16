import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";

import {ButtonModule} from 'primeng/button';
import { FilterComponent } from "./filter/filter.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TodosPageComponent } from "./todos-page/todos-page.component";
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from "@angular/forms";
import { TodosComponent } from "./todos.component";
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    TodoComponent,
    TodosPageComponent,
    FilterComponent,
    TodosComponent
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    CheckboxModule
  ]
})

export class TodosModule {

}