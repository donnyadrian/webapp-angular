import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogRequest } from 'src/app/models/log.model';

@Component({
  selector: 'app-auditoria-filtros',
  templateUrl: './auditoria-filtros.component.html',
  styleUrls: ['./auditoria-filtros.component.scss']
})
export class AuditoriaFiltrosComponent implements OnInit {

  @Input() milog: LogRequest;
  hoy: Date = new Date();
  @Output() buscarlogsEvent: EventEmitter<LogRequest> = new EventEmitter<LogRequest>();

  constructor() {
    this.milog = {
      fechainicio: "2021-03-01",
      fechafin: "2021-04-01",
      nombreapi: "",
      usuarioejecucion: "",
    };
   }

  ngOnInit(): void {
  }

  buscarlogs(milog: LogRequest){
    console.log(this.milog);
    this.buscarlogsEvent.emit(this.milog);
  }

}
