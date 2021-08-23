import { Component, Input, OnInit } from '@angular/core';
import { LogsResponse } from 'src/app/models/logs-response.model';

@Component({
  selector: 'app-errores-lista',
  templateUrl: './errores-lista.component.html',
  styleUrls: ['./errores-lista.component.scss']
})
export class ErroresListaComponent implements OnInit {

  @Input() logs: LogsResponse;
  
  constructor() { this.logs = {
    logs: [],
    paginacion: {
      totalregistros: 0,
      totalpagina: 0
    }
  }}

  ngOnInit(): void {
  }

}
