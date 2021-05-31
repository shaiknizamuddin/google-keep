// import * as EventEmitter from 'events';
import { Component, ElementRef,EventEmitter, HostListener, Input, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
// import * as EventEmitter from 'events';
import { Notes } from '../models/notes';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public editorBody: boolean = true;
  public sampleEditor: boolean = false;
  public placement: string = 'top';
  public notes = new Notes();
  @ViewChild('titleContent') titleContent: ElementRef;
  @ViewChild('bodyContent') bodyContent: ElementRef;
  public notesList: any;
  public actionType:any;
  @Output() editorClosed = new EventEmitter<any>();
  @Output() newData = new EventEmitter<any>();
  @Input() seletedNote:any;

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.editorBody === true && this.sampleEditor === false) {
      this.saveAndCloseEditor()
    }
  }
public titleField:any;
  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange) {
    if(this.seletedNote.title || this.seletedNote.body){
      this.actionType = 'update';
    }
    document.getElementById('titleRef').innerHTML = this.seletedNote.title;
    document.getElementById('bodyRef').innerHTML = this.seletedNote.body;
  }

  ngAfterViewInit() {
    // this.titleContent.nativeElement.value = this.seletedNote.title;
    // this.bodyContent.nativeElement.value = this.seletedNote.body;
  }

  saveAndCloseEditor() {
    this.editorBody = false;
    this.sampleEditor = true;
    this.editorClosed.emit({ editorBody: false, sampleEditor: true });
    
    this.notes.title = this.titleContent?.nativeElement.innerText;
    this.notes.body = this.bodyContent?.nativeElement.innerText;
    console.log(this.notes.body , '99999999999999999999999999999999999999999999999999999')
    this.notes.createdAt = new Date();
    this.notes.updatedAt = new Date;
    this.notes.color = 'none';
    this.newData.emit(this.notes);
    console.log(this.notes, 'this.notes')
  }

}
