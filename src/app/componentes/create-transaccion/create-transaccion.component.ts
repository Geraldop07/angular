import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransaccionService } from 'src/app/servicios/transaccion.service';

@Component({
  selector: 'app-create-transaccion',
  templateUrl: './create-transaccion.component.html',
  styleUrls: ['./create-transaccion.component.css']
})
export class CreateTransaccionComponent implements OnInit {
  createTransaccion: FormGroup;
  submitted = false;
  loading = false;
  id: string | undefined;
  title = 'Agregar Transacción';
  actionTitle = 'Crear';

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private _transaccionService: TransaccionService) {
    this.createTransaccion = this.fb.group({
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      detalle: ['', Validators.required],
      monto: ['', Validators.required],
      estado: ['', Validators.required],
      categoria: ['', Validators.required]
    })
    console.log(this.id)
  }

  ngOnInit(): void {
    this._transaccionService.getTransaccionToEdit().subscribe(data => {
      console.log("data ID" + data);
      console.log("this ID" + this.id);
      if (data === this.id) {
        console.log("Eliminaste la transaccion que editabas");
        // this.createTransaccion.reset();
        this.title = "Crear Transacción";
        this.actionTitle = "Crear";
        this.createTransaccion.reset();
        this.submitted = false;
        this.id = undefined;
      } else if (data !== this.id) {

        if (data.id === undefined) {
        } else {
          this.id = data.id;
          this.title = "Editar Transacción";
          this.actionTitle = "Editar";
          this.createTransaccion.patchValue({
            tipo: data.tipo,
            fecha: data.fecha,
            detalle: data.detalle,
            monto: data.monto,
            estado: data.estado,
            categoria: data.categoria,
          });
        }

      }
    })
  }

  addOrUpdateTransaccion() {
    this.submitted = true;

    if (this.createTransaccion.invalid) {
      return;
    }

    if (this.id === undefined) {
      this.agregarTransaccion();
    } else {
      this.updateTransaccion(this.id);
      this.id = undefined;
    }

  }

  agregarTransaccion() {

    const transaccion: any = {
      tipo: this.createTransaccion.value.tipo,
      fecha: this.createTransaccion.value.fecha,
      detalle: this.createTransaccion.value.detalle,
      monto: this.createTransaccion.value.monto,
      estado: this.createTransaccion.value.estado,
      categoria: this.createTransaccion.value.categoria
    }

    this.loading = true;

    this._transaccionService.addTransaccion(transaccion).then(() => {
      console.log("Transaccion registrada");
      this.toastr.success('La transacción ha sido registrada con éxito.', 'Transacción registrada', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.createTransaccion.reset();
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })

    console.log(transaccion);
  }

  updateTransaccion(id: string) {

    const transaccion: any = {
      tipo: this.createTransaccion.value.tipo,
      fecha: this.createTransaccion.value.fecha,
      detalle: this.createTransaccion.value.detalle,
      monto: this.createTransaccion.value.monto,
      estado: this.createTransaccion.value.estado,
      categoria: this.createTransaccion.value.categoria
    }

    this.loading = true;

    this._transaccionService.updateTransaccion(id, transaccion).then(() => {
      this.loading = false;
      console.log("Transaccion modificada");
      this.toastr.info('La transacción ha sido modificada con éxito.', 'Transacción modificada', {
        positionClass: 'toast-bottom-right'
      });
      this.title = "Crear Transacción";
      this.actionTitle = "Crear";
      this.createTransaccion.reset();
      this.submitted = false;
    })
  }

  cancelEdit() {
    this.id = undefined;
    this.createTransaccion.reset();
    this.title = "Crear Transacción";
    this.actionTitle = "Crear";
  }

}
