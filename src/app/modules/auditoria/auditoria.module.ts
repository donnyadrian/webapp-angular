import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditoriaRoutingModule } from './auditoria-routing.module';
import { AuditoriaErroresComponent } from './components/auditoria-errores/auditoria-errores.component';
import { AuditoriaFiltrosComponent } from './components/auditoria-filtros/auditoria-filtros.component';
import { ErroresListaComponent } from './components/errores-lista/errores-lista.component';
import { FormsModule } from '@angular/forms';
import { TextoLongitudPipe } from '../../pipes/texto-longitud.pipe';


@NgModule({
  declarations: [
    AuditoriaErroresComponent,
    AuditoriaFiltrosComponent,
    ErroresListaComponent,
    TextoLongitudPipe
  ],
  imports: [
    CommonModule,
    AuditoriaRoutingModule,
    FormsModule
  ]
})
export class AuditoriaModule { }
