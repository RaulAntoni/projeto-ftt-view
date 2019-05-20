import { NgModule } from "@angular/core";
import { GaragemRoutingModule } from "./garagem-routing.module";
import { GaragemFormComponent } from "./garagem-form/garagem-form.component";
import { GaragemListComponent } from "./garagem-list/garagem-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [GaragemFormComponent, GaragemListComponent],
  imports: [SharedModule, GaragemRoutingModule]
})
export class GaragemModule {}
