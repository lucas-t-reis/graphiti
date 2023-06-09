import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasComponent } from './features/canvas/canvas.component';
import { TextAreaComponent } from './features/text-area/text-area.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { GraphComponent } from './core/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    TextAreaComponent,
    HeaderComponent,
    FooterComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
