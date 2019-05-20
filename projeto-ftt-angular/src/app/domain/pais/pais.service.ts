import { HttpClient } from '@angular/common/http';
import { CrudService } from "src/app/shared/service/crud.service";
import { Pais } from "./pais";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends CrudService<Pais> {

  /**
   * Construtor da classe
   *
   * @param httpClient
   */
  constructor(public httpClient: HttpClient) {
    super(httpClient, 'pais');
  }
}
