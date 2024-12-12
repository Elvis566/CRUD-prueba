import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private httpClient:HttpClient) { }
  getCategorias(){
    return this.httpClient.get('http://localhost:4000/api/v0/categoria')
  }
  storeGastos(descripcion:any,monto:any,fechaTransaccion:any,categorias_id:any){
    return this.httpClient.post('http://localhost:4000/api/v1/registrar',{
      descripcion:descripcion,
      monto:monto,
      fechaTransaccion:fechaTransaccion,
      categorias_id:categorias_id
    })
  }
  getGastoCategoria(){
    return this.httpClient.get('http://localhost:4000/api/v1/gastoCategoria')
  }
  getgastos(){
    return this.httpClient.get('http://localhost:4000/api/v1/gastos')
  }
  gastosBusqueda(fechaTransaccion: string) {
    // Preparamos los parámetros de la consulta
    const params = new HttpParams().set('fechaTransaccion', fechaTransaccion);
  
    // Realizamos la petición GET incluyendo los parámetros
    return this.httpClient.get('http://localhost:4000/api/v1/gastosFecha', { params });
  }
}
