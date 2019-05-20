import { GaragemListComponent } from "./garagem-list/garagem-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GaragemFormComponent } from "./garagem-form/garagem-form.component";
import { PaisGuard } from "./resolve/pais.guard";

const routes: Routes = [
  { path: "", component: GaragemListComponent },
  {
    path: "novo",
    component: GaragemFormComponent,
    data: [{ action: "inserir" }],
    resolve: {
      paises: PaisGuard
    }
  },
  {
    path: "editar/:id",
    component: GaragemFormComponent,
    data: [{ acao: "alterar" }],
    resolve: {
      paises: PaisGuard
    }
  },
  {
    path: "visualizar/:id",
    component: GaragemFormComponent,
    data: [{ acao: "visualizar" }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaragemRoutingModule {}
