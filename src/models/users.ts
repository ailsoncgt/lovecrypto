export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: number;
  status: boolean;
  coin: string;
  sex: string;

  constructor()
  constructor(obj: any)
  constructor(obj?: any) {
    if (obj && obj.id) {
      this.id = obj && obj.id || '';
    } else {
      this.id = obj && obj.$key || '';
    }

    this.name = obj && obj.name || '';
    this.email = obj && obj.email || '';
    this.status = obj && obj.status || true;
    this.balance = obj && obj.balance || 0.00;
    this.phone = obj && obj.phone || '';
    this.coin = obj && obj.coin || 'USD';
    this.sex = obj && obj.sex || '';
  }

}
