import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnanthuComponent } from './ananthu/ananthu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnanthuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AnanthuComponent]
})
export class AppModule { }
