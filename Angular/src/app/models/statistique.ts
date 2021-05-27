export class Statistique {
  public id: string;
  public titre: string;
  public valeur: number;
  public appreciation: string;

  constructor(id: string, titre: string, valeur: number, appreciation: string) {
    this.id = id;
    this.titre = titre;
    this.valeur = valeur;
    this.appreciation = appreciation;
  }
}
