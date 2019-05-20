import { CarroListComponent } from "./carro-list/carro-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarroFormComponent } from "./carro-form/carro-form.component";

const routes: Routes = [
  { path: "", component: CarroListComponent },
  { path: "novo", component: CarroFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroRoutingModule {}
