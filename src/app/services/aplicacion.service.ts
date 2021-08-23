import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AplicacionResponse } from '../models/aplicacion-response.model';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  constructor(private http: HttpClient) { }

  getAplicacion(id: number): Observable<AplicacionResponse> {
    const urlApi = environment.urlApi;
    const url = `${urlApi}/mantenimiento/aplicacion/${id}`;
    return this.http.get<AplicacionResponse>(url);
  }
}
