import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CiastkoComponent } from './ciastko/ciastko.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CiastkoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
