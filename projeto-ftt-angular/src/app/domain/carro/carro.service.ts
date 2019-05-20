import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Carro } from "./carro";
import { CrudService } from 'src/app/shared/service/crud.service';

@Injectable({
  providedIn: "root"
})
export class CarroService extends CrudService<Carro> {

  /**
   * Construtor da classe.
   *
   * @param httpClient
   */
  constructor(public httpClient: HttpClient) {
    super(httpClient, 'carro');
  }
}
