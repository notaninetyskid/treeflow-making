import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { DropppingAreaComponent } from './droppping-area/droppping-area.component';
import { BasicDropPlaceComponent } from './droppping-area/basic-drop-place/basic-drop-place.component';
import { SplitComponentComponent } from './droppping-area/split-component/split-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DropppingAreaComponent,
    SplitComponentComponent,
    BasicDropPlaceComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
