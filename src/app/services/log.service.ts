import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LogsResponse } from '../models/logs-response.model';
import { LogRequest } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  getLogs(params: LogRequest): Observable<LogsResponse> {
    const urlApi = environment.urlApiLog;
    const url = `${urlApi}/log/listar`;
    const options = { 
      params: new HttpParams()
      .set('fechainicio', params.fechainicio)
      .append('fechafin', params.fechafin)
      .append('usuarioejecucion', params.usuarioejecucion)
      .append('nombreapi', params.nombreapi)
    };
    return this.http.get<LogsResponse>(url, options );
  }
}
