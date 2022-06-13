import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TransaccionService } from 'src/app/servicios/transaccion.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-transacciones',
  templateUrl: './lista-transacciones.component.html',
  styleUrls: ['./lista-transacciones.component.css']
})
export class ListaTransaccionesComponent implements OnInit {
  transacciones: any[] = [];
  selectedDate: string = '';
  palabra: string = '';

  constructor(private toastr: ToastrService,
              private _transaccionService: TransaccionService) {
  }

  ngOnInit(): void {
    this.getTransacciones();
  }

  getTransacciones() {
    this._transaccionService.getTransacciones('','').subscribe(data => {
      this.transacciones = [];
      data.forEach((element: any) => {
        this.transacciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.transacciones);
    })
  }

  deleteTransaccion(id: string) {
    this._transaccionService.deleteTransaccion(id).then(() => {
      console.log("Transaccion eliminada");
      this.toastr.warning('La transacción ha sido eliminada con éxito.', 'Transacción eliminada', {
        positionClass: 'toast-bottom-right'
      });
      this._transaccionService.addTransaccionToUpdate(id);
    }).catch(error => {
      console.log(error);
    })
  }

  updateTransaccion(transaccion: any) {
    this._transaccionService.addTransaccionToUpdate(transaccion);
  }

  showGastos() {
    this._transaccionService.getTransacciones('Gastos','').subscribe(data => {
      this.transacciones = [];
      data.forEach((element: any) => {
        this.transacciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.transacciones);
    })
  }

  showIngresos() {
    this._transaccionService.getTransacciones('Ingresos','').subscribe(data => {
      this.transacciones = [];
      data.forEach((element: any) => {
        this.transacciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.transacciones);
    })
  }


  searchByDate() {
    this._transaccionService.getTransacciones('Fecha',this.selectedDate).subscribe(data => {
      this.transacciones = [];
      data.forEach((element: any) => {
        this.transacciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.transacciones);
    })
  } 

  searchByDetalle() {
    this._transaccionService.getTransacciones('Detalle',this.palabra).subscribe(data => {
      this.transacciones = [];
      data.forEach((element: any) => {
        this.transacciones.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.transacciones);
    })
  } 


}
