import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trymat',
  templateUrl: './trymat.component.html',
  styleUrls: ['./trymat.component.css']
})
export class TrymatComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    this.message = '';
  }

}
