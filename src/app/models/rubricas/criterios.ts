export class Criterio{
    constructor(rubrica_id = null , nombre = null , peso = null){
        this.rubrica_id = rubrica_id;
        this.nombre = nombre;
        this.peso = peso;   
}
    rubrica_id : number;
    nombre : string;
    peso : number;
}