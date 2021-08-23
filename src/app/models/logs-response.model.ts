import { Paginacion } from './paginacion.model';
import { Log } from './log.model';

export interface LogsResponse {
    logs: Log[];
    paginacion: Paginacion;
}