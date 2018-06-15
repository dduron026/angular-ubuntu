import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 5;

  constructor() { }

  ngOnInit() {
  }

  incrementar( valor ) {
    if (this.progreso <= 0 && valor <= 0) {
      valor = 0;
    }
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      return;
    }
    this.progreso += valor;
  }

}
