import { CuerpoTecnico } from "./CuerpoTecnico";
import { Futbolista } from "./Futbolistas";
import { CuerpoMedico } from "./CuerpoMedico";


export class SeleccionFutbol{
    protected nombreSeleccion:string;
    protected listadoEntrenadores:CuerpoTecnico[];
    protected listadoFutbolistas:Futbolista[];
    protected listadoMedicos:CuerpoMedico[];

    constructor(nomSeleccion:string,listaEntrenadores:CuerpoTecnico[],listaFutbolistas:Futbolista[],listaMedicos:CuerpoMedico[]) {
        this.nombreSeleccion = nomSeleccion;
        this.listadoEntrenadores = listaEntrenadores;
        this.listadoFutbolistas = listaFutbolistas;
        this.listadoMedicos = listaMedicos;
        
    }
    verificarFutbolistaEnLista(parametroFutbolista:Futbolista): boolean{
        let posicionArreglo: boolean = false;
        
        for (let i:number = 0; i < this.listadoFutbolistas.length; i++) {
            if (this.listadoFutbolistas[i].get_NumPasaporte() === parametroFutbolista.get_NumPasaporte()) {
                posicionArreglo = true
            }
        }
            return posicionArreglo;
    }
    ingresarFubolista(parametroFutbolista:Futbolista):void{
        
        this.listadoFutbolistas.push(parametroFutbolista);

    }

    borrarFutbolista(parametroFutbolista:Futbolista): void{
        for (let i:number = 0; i < this.listadoFutbolistas.length; i++) {

            if (this.listadoFutbolistas[i].get_apellido() === parametroFutbolista.get_apellido()) {

             this.listadoFutbolistas.splice(i,1);
            }

        }
    }
    editarListaSeleccion(pos:number, apellido:string):void{
        this.listadoFutbolistas[pos].set_apellido(apellido);
    
    }
}