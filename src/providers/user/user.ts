import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Constants } from '../../environments/constants';
import { AuthProvider } from '../../providers/auth/auth.provider';

@Injectable()
export class UserPrivider {
  constructor(
    private afDb: AngularFireDatabase,
    private authProvider: AuthProvider
  ) { }

  list() {
    return this.afDb.list(Constants.PATH_DOCUMENTS_USER).valueChanges();
  }

  byId(id) {
    return this.afDb.object(`${Constants.PATH_DOCUMENTS_USER}${id}`).valueChanges();
  }

  setItem(id, data): Promise<any> {
    return this.afDb.object(`${Constants.PATH_DOCUMENTS_USER}${id}`).update(data)
  }
}