import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice/data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers : [DataService]
})
export class PokedexComponent implements OnInit {

  pokemons : any = [];
  constructor(private dataService : DataService) { }

  ngOnInit() {

  }

  allPokemons() {
    this.dataService.getPokemons().subscribe(
      data => this.pokemons = data,
      err => console.log(err),
      () => console.log('loading data')
    );
  }

}
