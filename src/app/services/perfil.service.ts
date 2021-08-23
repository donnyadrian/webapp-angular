import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PerfilResponse } from '../models/perfil-response.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil(id: number): Observable<PerfilResponse> {
    const urlApi = environment.urlApi;
    const url = `${urlApi}/mantenimiento/perfil/${id}`;
    return this.http.get<PerfilResponse>(url);
  }
}
