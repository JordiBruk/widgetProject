import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrato } from '../models/contrato';

const URL = environment.URLweb;

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http:HttpClient) { }

  getContratoById (codigo:string):Observable<Contrato>{
    return this.http.get<Contrato>(URL + "/" + codigo);
  }
}
