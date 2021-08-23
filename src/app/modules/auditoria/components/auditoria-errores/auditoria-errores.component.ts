import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { LogRequest } from '../../../../models/log.model';
import { LogsResponse } from '../../../../models/logs-response.model';

@Component({
  selector: 'app-auditoria-errores',
  templateUrl: './auditoria-errores.component.html',
  styleUrls: ['./auditoria-errores.component.scss']
})
export class AuditoriaErroresComponent implements OnInit {

  milog: LogRequest;
  logs: LogsResponse;
  hoy: Date = new Date();

  constructor(private logService: LogService) { 
    this.milog = {
      fechainicio: "2021-03-01",
      fechafin: "2021-04-01",
      nombreapi: "",
      usuarioejecucion: "",
    };
    this.logs = {
      logs: [],
      paginacion: {
        totalregistros: 0,
        totalpagina: 0
      }
    }
  }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.logService.getLogs(this.milog).subscribe(resp => {
          this.logs = resp;
          console.log(this.logs)
    });
  }

  buscarlogs(){
    console.log(this.milog);
    this.getLogs();
  }
}
