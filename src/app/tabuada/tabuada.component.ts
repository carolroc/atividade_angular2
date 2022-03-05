import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  tabuadaCinco() {
    let tabuada = [];

    for (var i = 0; i < 11; i++) {
      tabuada.push(5 * i);
    }

    return tabuada;
  }
}
