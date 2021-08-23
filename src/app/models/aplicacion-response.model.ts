import { Estado } from './estado.model';
import { Usuario } from './usuario.model';

export interface Paginacion {
    totalregistros: number;
    totalpagina: number;
}

export interface AplicacionResponse {
    id: number,
    nombre: string;
    descripcion: string;
    esLanzador: boolean;
    esAppLanzamiento: boolean;
    nombreHost: string;
    dominio: string;
    url: string;
    ipAddress: string;
    key: string;
    code: string;
    browserDefault: string;
    versionBrowserDefault: string;
    version: string;
    imagen: string;
    identificadorMovil: string;
    esAppInterno: boolean;
    tipoAplicacion: TipoAplicacion;
    estado: Estado;
    visibleEnD4: boolean;
    esMesaServicio: boolean;
}

interface TipoAplicacion {
    id: number;
    nombre: string;
}
