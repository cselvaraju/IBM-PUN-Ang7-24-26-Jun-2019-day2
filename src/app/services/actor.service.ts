import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai', rating: 9.8},
      {name: 'Kamal Hasan', city: 'Chennai', rating: 8.2},
      {name: 'Deepika Padukone', city: 'Pune', rating: 9.4},
      {name: 'Aishwarya Rai', city: 'New Delhi', rating: 8.5},
      {name: 'Rajnikant', city: 'Chennai', rating: 9.5, country: 'India'}
    ];
  }

  getActorlist() {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  updateActor(index: number, newActor: Actor) {
    this.actorList[index] = newActor;
  }
}
