import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObservabledemoService {

  data: Observable<any>;

  constructor() {
    this.data = new Observable<any>(
      observer => {
        setTimeout(() => {
          observer.next(10);
        }, 5000);

        setTimeout(() => {
          observer.next(20);
        }, 10000);

        setTimeout(() => {
          observer.next(30);
        }, 15000);

        setTimeout(() => {
          observer.next({name: 'ABCD', score: 55});
        }, 20000);

      }
    );
  }

  getData(): Observable<any> {
    return this.data;
  }
}
