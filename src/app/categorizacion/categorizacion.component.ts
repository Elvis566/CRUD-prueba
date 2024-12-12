import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-categorizacion',
  standalone: true,
  imports: [],
  templateUrl: './categorizacion.component.html',
  styleUrl: './categorizacion.component.css'
})
export class CategorizacionComponent implements OnInit {
  gastosCat:any
  constructor(private gastosService:GastosService){}
  ngOnInit(): void {
    this.getgcategoria()
  }
  getgcategoria(){
    this.gastosService.getGastoCategoria().subscribe({
      next:(datos:any)=>{
        this.gastosCat=datos
      }
    })
  }

}
