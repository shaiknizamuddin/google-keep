import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(private config: NgbModalConfig, private modalService: NgbModal) {
    config.keyboard = true;
    config.animation = false;
    this.notesList = [{
      title: 'First Title',
      body: "helo there this is niam . sdfsddddddddddddddggggg\ngggggggggggggggggggggggggggggggggggggggggggggggdddddddddddddddddddd\ndddddddddd\ndddddddddddddddd\nddddddddddddddd\f\f\n\f\f\f\\n\n\n\n\n\\n\njjjjjjjjjjjjjjjjjjjjjjjjjjjj\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
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
      title: 'Third Title',
      body: `Laptop pass : N9zam9@54321
      Bitlocker pin : 147258369
      
      Employee id marsh : 1235396
      
      VDI pin : 14725836 (access code) 
      
      ADP 
      Username : nizamuddin.shaik
      Pass : N9zam9@1
      
      Solugenix employee id : SG784
      
      Sudexo pass : Nizam@123`,
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'green',
      reminder: '',
      labelName: 'Testing'
    },
    {
      title: 'First Title',
      body: "helo there this is niam . sdfsdddddddddddddd\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    },
    {
      title: 'Second Title',
      body: "helo\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    },
    {
      title: 'Third Title',
      body: `Laptop pass : N9zam9@54321
      Bitlocker pin : 147258369
      
      Employee id marsh : 1235396
      
      VDI pin : 14725836 (access code) 
      
      ADP 
      Username : nizamuddin.shaik
      Pass : N9zam9@1
      
      Solugenix employee id : SG784
      
      Sudexo pass : Nizam@123`,
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'green',
      reminder: '',
      labelName: 'Testing'
    }, {
      title: 'Third Title',
      body: `Laptop pass : N9zam9@54321
      Bitlocker pin : 147258369
      
      Employee id marsh : 1235396
      
      VDI pin : 14725836 (access code) 
      
      ADP 
      Username : nizamuddin.shaik
      Pass : N9zam9@1
      
      Solugenix employee id : SG784
      
      Sudexo pass : Nizam@123`,
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'green',
      reminder: '',
      labelName: 'Testing'
    },
    {
      title: 'Second Title',
      body: "helo\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'red',
      reminder: '',
      labelName: 'Testing'
    }, {
      title: 'Third Title',
      body: `Laptop pass : N9zam9@54321
      Bitlocker pin : 147258369
      
      Employee id marsh : 1235396
      
      VDI pin : 14725836 (access code) 
      
      ADP 
      Username : nizamuddin.shaik
      Pass : N9zam9@1
      
      Solugenix employee id : SG784
      
      Sudexo pass : Nizam@123`,
      createdAt: new Date(),
      updatedAt: new Date(),
      color: 'green',
      reminder: '',
      labelName: 'Testing'
    },
    ]
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
        this.notesList.push(e);
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
