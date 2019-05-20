import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Pais } from "../../pais/pais";
import { PaisService } from "../../pais/pais.service";

@Injectable({
  providedIn: "root"
})
export class PaisGuard implements Resolve<Pais> {

  /**
   * Construtor da classe.
   *
   * @param paisService
   */
  constructor(private paisService: PaisService) {}

  /**
   * Resolve guard para buscar os paises para cadastrar uma nova garagem.
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Pais> {
    return new Observable(observer => {
      this.paisService.findAll().subscribe(
        (data: any) => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
          of();
        }
      );
    });
  }
}
