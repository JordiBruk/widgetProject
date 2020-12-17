import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../models/contrato';
import { Categoria, Producto } from '../models/Producto';
import { ContratoService } from '../services/contrato.service';

@Component({
  selector: 'app-portal-reclamaciones',
  templateUrl: './portal-reclamaciones.component.html',
  styleUrls: ['./portal-reclamaciones.component.css']
})
export class PortalReclamacionesComponent implements OnInit {

  contrato:Contrato;
  codigo:string;
  error:any;

 

  constructor(private activatedRouter:ActivatedRoute, private contratoService:ContratoService ) {}

  ngOnInit() {


    //--------------------- Temporal , BORRAR------------------------------------------------------------------
    this.contrato = new Contrato;
    this.contrato.fechaInicio = new Date;
    this.contrato.producto = new Producto;
    this.contrato.producto.nombre = "Portatil Lenovo Legion v565 16GB RAM AMD 4800HS NVIDIA rtx2070" 
    this.contrato.producto.categoria = new Categoria;
    this.contrato.producto.categoria.tipo = "Electrónica"
    this.contrato.producto.categoria.subtipo = "Portátil"
    this.contrato.producto.id = "eanrefHP-portatil-ref-2345-rv2.23"
    this.contrato.seguroContratado = "Seguro de robo"

    //---------------------------------------------------------------------------------------------------------


    this.activatedRouter.params.subscribe(
      params => {
        let codigo = params["codigo"];
        this.codigo = codigo;

        this.contratoService.getContradoById(codigo).subscribe(
          data => {
            this.contrato = data;
          },
          error =>{
            this.error = error;
            if(error.status == 404){
              this.contrato = undefined;
            }
          }
          
        );

      }
    ); 
  }

}
