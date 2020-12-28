export class Competencias {
    competencias_id:number;
    tipo_competencias_id:number;
    nombre:string;
    descripcion:string;
    estado: string;
}
export class Tipo_Competencia{
    tipo_competencias_id:number;
    nombre: string;
    estado: string;
}
export class Plan{
    plan_id: number;
    ua_id:number;
    nombre:string;
    f_ini: Date;
    f_fin:Date;
}
export class LineaPA{
    lineas_pa_id: number;
    nombre: string;
    estado: string;
}
export class Competencia_Linea{
    cl_id: number;
    competencias_id: string;
    linea_plan_id: number;
    estado: string;
}

