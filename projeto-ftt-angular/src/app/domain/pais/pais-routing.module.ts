import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaisListComponent } from "./pais-list/pais-list.component";
import { PaisFormComponent } from "./pais-form/pais-form.component";

const routes: Routes = [
  { path: "", component: PaisListComponent },
  { path: "novo", component: PaisFormComponent, data: [{ action: "inserir" }] },
  {
    path: "editar/:id",
    component: PaisFormComponent,
    data: [{ acao: "alterar" }]
  },
  {
    path: "visualizar/:id",
    component: PaisFormComponent,
    data: [{ acao: "visualizar" }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule {}
