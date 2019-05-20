import { NgModule } from "@angular/core";

import { PaisRoutingModule } from "./pais-routing.module";
import { PaisFormComponent } from "./pais-form/pais-form.component";
import { PaisListComponent } from "./pais-list/pais-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [PaisFormComponent, PaisListComponent],
  imports: [SharedModule, PaisRoutingModule]
})
export class PaisModule {}
