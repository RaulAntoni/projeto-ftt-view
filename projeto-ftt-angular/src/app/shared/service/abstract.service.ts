import { environment } from "src/environments/environment";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * Classe abstrata para services da aplicação.
 */
@Injectable({
  providedIn: "root"
})
export abstract class AbstractService {

  /**
   * @var baseUrl
   */
  private baseUrl: string;

  /**
   * @var param
   */
  private params: any;

  /**
   * @var headres
   */
  private headers = new Headers({
    "Content-Type": "application/json; charset=UTF-8"
  });

  /**
   *
   * @param baseUrl
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Returns absolute url considering context and relative url
   *
   * @param relativeUrl
   */
  protected getUrl(relativeUrl?: string): string {
    let absoluteUrl = environment.API_URL + this.baseUrl;

    if (absoluteUrl !== null && relativeUrl !== undefined) {
      absoluteUrl += relativeUrl;
    }

    return absoluteUrl;
  }

  /**
   * Set headers to request.
   */
  protected getHeaders(): any {
    return { headers: this.headers };
  }

  /**
   * Set param to request.
   */
  protected getParam(nameParam: string, valueParam: any): any {
    const params: HttpParams = new HttpParams().set(nameParam, valueParam);

    return { params };
  }
}
