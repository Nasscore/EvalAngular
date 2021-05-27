import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecupStatService {
  public tabStats: Statistique[] = [];
  constructor(private http: HttpClient) {}

  getStats(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr')
      .toPromise()
      .then((obj: any) => {
        for (let o of obj) {
          this.tabStats.push(
            new Statistique(o.id, o.title, o.value, o.appreciation)
          );
        }
        return this.tabStats;
      });
  }
}
