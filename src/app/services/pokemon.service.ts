import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../Models/pokemon.list';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //Conexion con la API de Pokemon
  protected API_URL = `{ enviroment.apiURL/ }`;

  constructor(private http: HttpClient) { }

  

  //Trayendo la lista de pokemons con paginacion 
  //Nos suscribimos a un observable para poder convertir la lista de pokemons 
  getPokemonList(offset: number, limit: number=20): Observable<PokemonList[]>{
    return this.http.get<PokemonList[]>(this.API_URL + 'pokemon?offset='+offset+'&limit='+limit)
    .pipe(
      map((x: any) => x.results)
    );    
  }  
}
