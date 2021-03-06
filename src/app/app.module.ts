import { FormEditorComponent } from './form-editor/form-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMessageComponent } from './form-message/form-message.component';
import { DataService } from './services/data.service';
@NgModule({
   declarations: [
      AppComponent,
      FormEditorComponent,
      FormMessageComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule
   ],
   providers: [DataService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
