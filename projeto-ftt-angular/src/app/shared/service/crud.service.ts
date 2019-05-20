import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { take, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: "root"
})
export class CrudService<T> extends AbstractService {

  /**
   * @var alive
   */
  public alive = 1;

  /**
   * Construtor da classe.
   *
   * @param http
   * @param domain
   */
  constructor(public http: HttpClient, public domain: string) {
    super(domain);
  }

  /**
   * Retorna uma lista
   *
   * @return
   */
  public findAll(): Observable<any> {
    return this.http.get<T[]>(this.getUrl("/"), this.getHeaders()).pipe(
      take(this.alive),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  /**
   * Return a record.
   *
   * @return
   */
  public findById(id: number | string): Observable<any> {
    return this.http.get<T>(this.getUrl(`/${id}`), this.getHeaders()).pipe(
      take(this.alive),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  /**
   * Create a record
   */
  public salvar(record: T): Observable<any> {
    return this.http.post<T>(this.getUrl("/salvar"), record).pipe(
      take(this.alive),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  /**
   * Update a record
   */
  public atualizar(record: T): Observable<any> {
    return this.http.put<T>(this.getUrl("/"), record).pipe(
      take(this.alive),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  /**
   * Remove a record
   */
  public remover(id: number | string): Observable<any> {
    return this.http.delete<T>(this.getUrl(`/${id}`), this.getHeaders()).pipe(
      take(this.alive),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
