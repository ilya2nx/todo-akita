import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodosPageComponent } from "./todos-page.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: TodosPageComponent}
    ])
  ]
})

export class TodosPageModule {}