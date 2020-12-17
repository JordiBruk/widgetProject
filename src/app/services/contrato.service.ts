import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http:HttpClient) { }

  getContradoById (codigo:string):Observable<Contrato>{
    return this.http.get<Contrato>(URL + "");
  }
}
