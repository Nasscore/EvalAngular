import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvalAngular';

  public statA: Statistique = new Statistique(
    'azertyuiop123',
    'Cas covid en 2021',
    3000000,
    'WARNING'
  );
  public statB: Statistique = new Statistique(
    '123poiuytreza',
    'nombre de morts covid 2021',
    255000,
    'SUCCESS'
  );
}
