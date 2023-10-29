import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore: Firestore = inject(Firestore)

  constructor() { }

  async addUser(user: any) {
    await addDoc(this.getUserReference(), user).catch(
      (err) => { console.log(err) }
    ).then(
      (docRef) => {console.log('User written with ID: ', docRef?.id);
      }
    )
  }

  getUserReference() {
    return collection(this.firestore, "users");
  }

  getSingleUserReference(colId:string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
