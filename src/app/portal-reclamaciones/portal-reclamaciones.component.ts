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
    this.activatedRouter.params.subscribe(
      params => {
        let codigo = params["codigo"];
        this.codigo = codigo;

        this.contratoService.getContratoById(codigo).subscribe(
          data => {
            this.contrato = data;
            console.log(this.contrato);
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
