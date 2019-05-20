import { NgModule } from "@angular/core";
import { CarroRoutingModule } from "./carro-routing.module";
import { CarroFormComponent } from "./carro-form/carro-form.component";
import { CarroListComponent } from "./carro-list/carro-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CarroFormComponent, CarroListComponent],
  imports: [SharedModule, CarroRoutingModule]
})
export class CarroModule {}
