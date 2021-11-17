import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  players:Player [] = [
    new Player(1,"Carlos",40),
    new Player(2,"Jose",30),
    new Player(3,"Vallery",20)
  ]
  constructor() { }
}
