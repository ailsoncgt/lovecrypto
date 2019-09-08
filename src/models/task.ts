export class Task {
  id: string;
  name: string;
  company: {
    id: string;
    name: string;
  }
  type: string;
  shortDescription: string;
  description: string;
  reward: number;
  dateStar: string;
  dateEnd: string;
  participants: [any];

  constructor()
  constructor(obj: any)
  constructor(obj?: any) {
    if (obj && obj.id) {
      this.id = obj && obj.id || '';
    } else {
      this.id = obj && obj.$key || '';
    }

    this.id = obj && obj.id || '';
    this.name = obj && obj.name || '';
    this.company = obj && obj.company || {};
    this.shortDescription = obj && obj.shortDescription || '';
    this.description = obj && obj.description || '';
    this.type = obj && obj.type || 'system';
    this.reward = obj && obj.reward || 0.00;
    this.dateStar = obj && obj.dateStar || '';
    this.dateEnd = obj && obj.dateEnd || '';
    this.participants = obj && obj.participants || [];
  }

}
