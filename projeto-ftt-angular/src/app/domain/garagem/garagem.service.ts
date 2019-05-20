import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "src/app/shared/service/crud.service";
import { Garagem } from './garagem';

@Injectable({
  providedIn: "root"
})
export class GaragemService extends CrudService<Garagem> {

  /**
   * Construtor da classe.
   *
   * @param httpClient
   */
  constructor(public httpClient: HttpClient) {
    super(httpClient, "garagem");
  }
}
