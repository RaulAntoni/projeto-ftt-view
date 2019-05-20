import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "garagem",
    loadChildren: "./domain/garagem/garagem.module#GaragemModule"
  },
  { path: "carro", loadChildren: "./domain/carro/carro.module#CarroModule" },
  { path: "pais", loadChildren: "./domain/pais/pais.module#PaisModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
