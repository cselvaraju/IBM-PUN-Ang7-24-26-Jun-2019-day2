import { Component, OnInit } from '@angular/core';
import { ObservabledemoService } from '../../services/observabledemo.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  data;

  constructor(private myService: ObservabledemoService) { }

  ngOnInit() {
    this.myService.getData().subscribe(
      data => this.data = data
    );
  }

}
