import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StructureDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
