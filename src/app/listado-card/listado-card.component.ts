import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-card',
  templateUrl: './listado-card.component.html',
  styleUrls: ['./listado-card.component.css']
})
export class ListadoCardComponent implements OnInit {

  @Input()
  public id=0;

  @Input()
  public nombre="";

  @Input()
  public bio="";

  @Input()
  public ocupacion="";

  @Input()
  public genero="";

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.id);
  }

}
