import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DataService} from './dataservice/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
