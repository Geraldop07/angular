import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private transaccion$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  addTransaccion(transaccion: any): Promise<any> {
    return this.firestore.collection('transacciones').add(transaccion);
  }

  getTransacciones(type: string, value: string): Observable<any> {
    if (type == 'Ingresos') {
      return this.firestore.collection('transacciones', ref => ref
        .where("tipo", "==", "Ingreso")
        .orderBy("fecha", "desc")
      ).snapshotChanges();
    } else if (type == 'Gastos') {
      return this.firestore.collection('transacciones', ref => ref
        .where("tipo", "==", "Gasto")
        .orderBy("fecha", "desc")
      ).snapshotChanges();
    } else if (type == 'Fecha') {
      return this.firestore.collection('transacciones', ref => ref
        .where("fecha", "==", value)
      ).snapshotChanges();
    } else if (type == 'Detalle') {
      return this.firestore.collection('transacciones', ref => ref
        .orderBy("detalle")
        .startAt(value)
        .endAt(value+"\uf8ff")
      ).snapshotChanges();
    } else {
      return this.firestore.collection('transacciones', ref => ref
        .orderBy("fecha", "desc")
      ).snapshotChanges();
    }
  }

  getTransaccionesIngresos() {
    return this.firestore.collection('transacciones', ref => ref
      .where("tipo", "==", "Ingreso")
      .orderBy("fecha", "desc")
    ).snapshotChanges();
  }

  getTransaccionesGastos() {
    return this.firestore.collection('transacciones', ref => ref
      .where("tipo", "==", "Gasto")
      .orderBy("fecha", "desc")
    ).snapshotChanges();
  }

  getTransaccionesByDate(date: string) {
    return this.firestore.collection('transacciones', ref => ref
      .where("fecha", "==", date)
    ).snapshotChanges();
  }

  getTransaccionesByDetalle(detalle: string) {
    return this.firestore.collection('transacciones', ref => ref
      .orderBy("detalle")
      .startAt(detalle)
      .endAt(detalle+"\uf8ff")
    ).snapshotChanges();
  }

  deleteTransaccion(id: string): Promise<any> {
    return this.firestore.collection('transacciones').doc(id).delete();
  }

  getTransaccion(id: string): Observable<any> {
    return this.firestore.collection('transacciones').doc(id).snapshotChanges();
  }

  addTransaccionToUpdate(transaccion: any) {
    this.transaccion$.next(transaccion);
  }

  updateTransaccion(id: string, data:any): Promise<any> {
    return this.firestore.collection('transacciones').doc(id).update(data);
  }

  getTransaccionToEdit(): Observable<any> {
    return this.transaccion$.asObservable(); 
  }
}
