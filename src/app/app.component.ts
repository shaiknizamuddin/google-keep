import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {Notes} from '../shared/models/notes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notesApp';
  public editorBody: boolean = true;
  public sampleEditor: boolean = false;
  public placement: string = 'top';
  public notes = new Notes();
  @ViewChild('titleContent') titleContent: ElementRef | undefined;
  @ViewChild('bodyContent') bodyContent: ElementRef | undefined;
  public notesList:any; 

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.editorBody === true && this.sampleEditor === false) {
      this.saveAndCloseEditor()
    }
  }

  constructor() { 
    this.notesList = [{
      title:'First Title',
      body:"helo there this is niam . sdfsddddddddddddddggggg\ngggggggggggggggggggggggggggggggggggggggggggggggdddddddddddddddddddd\ndddddddddd\ndddddddddddddddd\nddddddddddddddd\f\f\n\f\f\f\\n\n\n\n\n\\n\njjjjjjjjjjjjjjjjjjjjjjjjjjjj\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color:'red',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'Second Title',
      body:"hello",
      createdAt: new Date(),
      updatedAt: new Date(),
      color:'red',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'Third Title',
      body:`Laptop pass : N9zam9@54321
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
      color:'green',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'First Title',
      body:"helo there this is niam . sdfsdddddddddddddd\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color:'red',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'Second Title',
      body:"helo\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color:'red',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'Third Title',
      body:`Laptop pass : N9zam9@54321
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
      color:'green',
      reminder:'',
      labelName:'Testing'
    }, {
      title:'Third Title',
      body:`Laptop pass : N9zam9@54321
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
      color:'green',
      reminder:'',
      labelName:'Testing'
    },
    {
      title:'Second Title',
      body:"helo\n\n\n123\n\n\nnew line\n\n\n....'.'\n\n\none more new line !!",
      createdAt: new Date(),
      updatedAt: new Date(),
      color:'red',
      reminder:'',
      labelName:'Testing'
    }, {
      title:'Third Title',
      body:`Laptop pass : N9zam9@54321
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
      color:'green',
      reminder:'',
      labelName:'Testing'
    },
  ]
  }

  openEditor() {
    this.editorBody = true;
    this.sampleEditor = false;
  }

  saveAndCloseEditor() {
    this.editorBody = false;
    this.sampleEditor = true;
    console.log(this.titleContent?.nativeElement.innerText, '111111111111111111');
    console.log(this.bodyContent?.nativeElement.innerText, '2222222222222222');
    this.notes.title = this.titleContent?.nativeElement.innerText;
    this.notes.body = this.bodyContent?.nativeElement.innerText;
    this.notes.createdAt = new Date();
    this.notes.updatedAt = new Date;
    this.notes.color = 'none';
    console.log(this.notes , 'this.notes')
  }
}
