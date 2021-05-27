import { Component, Input } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvalAngular';

  public stat1: Statistique = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
    'Mort du covid en 2021',
    250000,
    'SUCCESS'
  );

  public stat2: Statistique = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb47',
    'Nombre de contamination en 2021',
    3000000,
    'SUCCESS'
  );
}
