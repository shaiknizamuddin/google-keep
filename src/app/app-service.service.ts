import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private firestore: AngularFirestore) { }

  // getNotesList():Observable<any> {
    // const userPostsCollection = this.firestore.collection<any>('notes');
    // this.userPosts$ = userPostsCollection.valueChanges();
    // console.log('===================')
    // return this.firestore.collection('notes').snapshotChanges().map( actions.map(a => {
    //     const data = a.payload.doc.data();
    //     const id = a.payload.doc.id;
    //     return { id, ...data }
    //   }
    //   )

    // this.firestore.collection('notes').snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as Shirt;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   }))
    // );

    // let userDoc = this.firestore.firestore.collection(`notes`);
    // userDoc.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //     return doc.data();
    //   })
    // })

  // }

  insertNewNote(notes) {
    // console.log(notes , 'notesnotes')
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("notes")
        .add({ ...notes })
        .then(res => { },
          (err) => reject(err));
    });
  }

  updatePolicy(policy) {
    delete policy.id;
    this.firestore.doc('policies/' + policy.id).update(policy);
  }

  deletePolicy(policyId: string) {
    this.firestore.doc('policies/' + policyId).delete();
  }



}

