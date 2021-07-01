import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from './app-service.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public editorBody: boolean = false;
  public sampleEditor: boolean = true;
  public notesList: any;
  modalReference: any;
  public focused: boolean = false;
  public selectedNoteIndex: any;
  public selectedNote: any;

  constructor(
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private _service: AppServiceService,
    private firestore: AngularFirestore
  ) {
    config.keyboard = true;
    config.animation = false;
    this.fetchNotesList();

    console.log(this.notesList, 'this.notesListthis.notesList')
    this.notesList = [{
      title: 'myNotes',
      body: "helo there this is niam ",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    },
    {
      title: 'Second Title',
      body: "hello",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    },

    {
      title: 'Third',
      body: "Testing \n \n testing 123",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    }
    ]
  }

  fetchNotesList() {
    // let arr = [];
    // let userDoc = this.firestore.firestore.collection(`notes`);
    // userDoc.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log(doc.id, "=>", doc.data());
    //     arr.push({ id: doc.id, ...doc.data() });
    //   })
    // })
    // this.notesList = arr;
  }



  openEditor() {
    this.editorBody = true;
    this.sampleEditor = false;
  }

  notesEditor(content: any, index: number, notes: any) {
    this.selectedNote = notes;
    this.focused = true;
    this.selectedNoteIndex = index;
    this.modalReference = this.modalService.open(content, { windowClass: 'modal-holder' });
    this.modalReference.result.then((result: any) => {
      // this.editorClosed();
    }, (reason: any) => {
      this.editorClosed(null, 'popup');
    });
  }

  saveOrUpdateNotes(e: any, action: any) {
    console.log(e, 'eeeeeeeeeeeeeeeeeeeeeeee', action);
    if (action === 'save') {
      if (e && (e.title || e.body)) {
        this._service.insertNewNote(e);
        this.notesList.push(e);
        // this.fetchNotesList();
        // this.notesList.reverse();
      }
    } else if (action === 'update') {

    }
  }

  editorClosed(e?: any, from?: String) {
    this.focused = false;
    if (from === 'popup') {
      return;
    }

    console.log(e);

    if (from === 'notes') {
      this.modalService.dismissAll();
      this.focused = false;
    } else {
      this.editorBody = e?.editorBody;
      this.sampleEditor = e?.sampleEditor;
    }
  }


}



// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;
//       allow write: if request.auth.uid != null;
//     }
//   }
// }
