import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice/data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  providers : [DataService]
})
export class PokedexComponent implements OnInit {

  pokemons: any = [];
  pokemon : any = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.onePokemon();
  }

  allPokemons() {
    this.dataService.getPokemons().subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('fetched correctly')
    );
  }

  onePokemon() {
    this.dataService.getPokemon('https://pokeapi.co/api/v2/pokemon/1').subscribe(
      data => {
        this.pokemon = data;
        this.getDescription(this.pokemon.species.url);
      },
      err => console.log(err),
      () => console.log('fetched correctly')
    );

  }

  getDescription(url){
    this.dataService.getPokemon(url).subscribe(
      data => {
        this.pokemon.description = data;
      },
      err => console.log(err),
      () => console.log('fetched corretly'),

    );
  }
}



