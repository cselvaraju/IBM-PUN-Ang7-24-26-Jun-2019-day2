import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Actor } from '../../models/actor.model';
import { ActorService } from '../../services/actor.service';


@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  @ViewChild('actorTable', {static: false}) table: MatTable<Element>;
  actorList: Actor[];
  listFlag: boolean;
  btnText: string;
  displayedColumns: string[];
  newActor: Actor;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actorList = this.actorService.getActorlist();
    this.listFlag = true;
    this.btnText = 'Hide List';
    this.displayedColumns = ['name', 'city', 'rating'];
    this.newActor = {
      name: '',
      city: '',
      rating: null
    };
  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = this.listFlag ? 'Hide List' : 'Show List';
  }

  deleteActor(index: number) {
    // this.actorList.splice(index, 1);
    this.actorService.deleteActor(index);
    this.table.renderRows();
  }

  addActor() {
    // this.actorList.push(this.newActor);
    this.actorService.addActor(this.newActor);
    this.table.renderRows();
    this.newActor = {
      name: '',
      city: '',
      rating: null
    };
  }
}
