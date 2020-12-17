export class Producto{
    nombre: string = '';
    precio: number = -1;
    categoria!: Categoria ;
    id: string = '';
    seleccionado:boolean = false;
    tipo!:string;
    descripcion!:string;
}

export class Categoria {
    tipo: string = '';
    subtipo: string = '';
  }