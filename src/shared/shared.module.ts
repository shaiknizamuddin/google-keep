import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { EditorComponent } from './editor/editor.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    SideNavComponent,
    HeaderComponent,
    EditorComponent
  ],
  exports:[
    SideNavComponent,
    HeaderComponent,
    EditorComponent 
  ]
})
export class SharedModule { }
