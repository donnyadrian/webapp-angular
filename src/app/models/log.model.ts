export interface Log {
    id: number,
    idtransaccion: string;
    apimethod: string;
    request: string;
    response: string;
    fecharegistro: string;
    mensaje: string;
    nombreapi: string;
    clase: string;
    nombremetodo: string;
    usuarioejecucion: string;
}

export interface LogRequest {
    fechainicio: string;
    fechafin: string;
    nombreapi: string;
    usuarioejecucion: string;
}