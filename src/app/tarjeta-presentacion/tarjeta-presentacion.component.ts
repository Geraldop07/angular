import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {

  name: string = "Gerard Ogando";
  job: string = "Ingeniero de Software";
  bio: string = "¡Hola! Me dedico al Frontend, aunque mi presentación no sea tan bonita, suelen solicitarme para desarrollar UI/UX de Apps y páginas web";

  constructor() { }

  ngOnInit(): void {
  }

}
