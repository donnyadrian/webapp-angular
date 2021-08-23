import { Estado } from "./estado.model";

export interface Paginacion {
    totalregistros: number;
    totalpagina: number;
}

export interface PerfilResponse {
    id: number;
    nombre: string;
    descripcion: string;
    empresa: PerfilEmpresa;
    ambitosAsignados: number[];
    aplicacionesAsignadas: number[];
    estado: Estado;
    listaPerfilAplicacionRol: PerfilAplicacion[];
}

interface PerfilEmpresa {
    id: number;
    nombre: string;
}

interface PerfilAplicacion {
    idPerfilAplicacionRol: number;
    nombreCompuesto: string;
    idAplicacion: number;
    idPerfilAplicacion: number;
    idRol: number;
}