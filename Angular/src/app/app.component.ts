import { Component, Input } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvalAngular';

  public tabStats: Statistique[] = [
    {
      id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
      titre: 'Mort du covid en 2021',
      valeur: 250000,
      appreciation: 'SUCCESS',
    },
    {
      id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47',
      titre: 'Nombre de contamination en 2021',
      valeur: 3000000,
      appreciation: 'SUCCESS',
    },
  ];
  constructor() {
    setTimeout(() => {
      this.tabStats.push(
        new Statistique(
          'fa1f5f40-be3b-11eb-91ec-7f5875ecfb48',
          'Nombre de vaccinés en 2021',
          33600000,
          'WARNING'
        )
      );
    }, 3000);
  }
}
