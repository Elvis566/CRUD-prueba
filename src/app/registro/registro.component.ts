import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  cat:any
  mensaje:any
  gastos:any
constructor(private gastosService:GastosService){}
  ngOnInit(): void {
    this.conseguirCat()
    this.getGastos()
  }
conseguirCat(){
  this.gastosService.getCategorias().subscribe({
    next:(datos:any)=>{
      this.cat=datos.categoria
      console.log(datos)
    },error:(err)=>{
      debugger
      console.log('error:',err)
    }
  })
}
guardar(descripcion: any, monto: any, fechaTransaccion: any, categorias_id: any) {
  this.gastosService.storeGastos(descripcion.value, monto.value, fechaTransaccion.value, categorias_id.value)
    .subscribe({
      next: (datos: any) => {
        this.mensaje=""
        // Aquí puedes manejar la lógica después de guardar exitosamente, si es necesario.
      },
      error: (err) => {
        this.mensaje=""
        console.log('err:', err);
        if (err.error && err.error.messageF) {
          this.mensaje = err.error.messageF;
        } else if (err.error && err.error.messageE) {
          this.mensaje = err.error.messageE;
        } else {
          this.mensaje = 'Error al guardar el gasto.';
        }
      }
    });
}
getGastos(){
  this.gastosService.getgastos().subscribe({
    next:(datos:any)=>{
      this.gastos=datos.gastos
    }
  })
}
getBusqueda(busqueda: any) {
  this.gastosService.gastosBusqueda(busqueda.value).subscribe({
    next: (datos: any) => {
      // Asegúrate de que esto coincida con la estructura de la respuesta de tu API
      this.gastos = datos.gastosfecha;
    },
    error: (error) => {
      console.error('Error al buscar gastos por fecha:', error);
    }
  });
}
}
