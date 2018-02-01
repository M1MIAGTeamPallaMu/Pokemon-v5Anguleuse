import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const API_URL : string = 'https://pokeapi.co/api/v2/pokemon';

@Injectable()
export class DataService {

  constructor( private http : HttpClient) {}

  getPokemons<T>() : Observable<T> {
    return <Observable<T>>this.http.get(API_URL + '?limit=909');
  }

  getPokemon<T>(url : string): Observable<T> {
    return <Observable<T>>this.http.get(url);
  }




}

