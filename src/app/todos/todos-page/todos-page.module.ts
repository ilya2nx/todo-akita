import { NgModule } from "@angular/core";
import { TodosPageComponent } from "./todos-page.component";
import {InputTextModule} from 'primeng/inputtext';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    TodosPageComponent
  ],
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: TodosPageComponent}
    ])
  ]
})

export class todosPageModule {

}