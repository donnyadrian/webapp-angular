import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuariosResponse } from '../models/usuarios-response.model';
import { UsuarioRequest } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsuariosResponse> {
    const urlApi = environment.urlApi;
    const url = `${urlApi}/mantenimiento/usuario/todos`;
    return this.http.get<UsuariosResponse>(url);
  }

  saveNewUser(user: UsuarioRequest): Observable<UsuariosResponse> {
    const urlApi = environment.urlApi;
    const url = `${urlApi}/mantenimiento/usuario/nuevo`;
    return this.http.post<UsuariosResponse>(url, {user});
  }

  updateUser(idUsuario: number, user: UsuarioRequest): Observable<UsuariosResponse> {
    const urlApi = environment.urlApi;
    const url = `${urlApi}/mantenimiento/usuario/${idUsuario}`;
    return this.http.put<UsuariosResponse>(url, {user});
  }
}
