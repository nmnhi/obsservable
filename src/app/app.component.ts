import { Component, OnInit } from '@angular/core';
import {
  filter,
  from,
  interval,
  map,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'angularobservable';

  constructor(private dataService: DataService) {}

  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  // setTimeout(() => {
  //   observer.error(
  //     new Error('Something went wrong! Please try again later!')
  //   );
  // }, 3000);
  // setTimeout(() => {
  //   observer.next('4');
  // }, 4000);
  // setTimeout(() => {
  //   observer.next('5');
  // }, 5000);
  // setTimeout(() => {
  //   observer.complete();
  // }, 6000);
  // observer.next('1');
  // observer.next('2');
  // observer.next('3');
  // observer.next('4');
  // observer.next('5');
  // });

  // myObservable = Observable.create(
  //   (observer: { next: (arg0: string) => void; complete: () => void }) => {
  //     console.log('Observable starts');
  //     setTimeout(() => {
  //       observer.next('A');
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next('B');
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('C');
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next('D');
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.next('E');
  //     }, 5000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 6000);
  //   }
  // );

  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  // myObservable = of(this.array1, this.array2, 7, 10, 'Hello');
  // myObservable = from(this.array1);

  myObservable = from(this.array1).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val >= 20;
    })
  );

  // transformObservable = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 20;
  //   })
  // );

  // filterObs = this.transformObservable.pipe(
  //   filter((val) => {
  //     return val >= 20;
  //   })
  // );

  // ngOnInit() {
  //   this.myObservable.subscribe(
  //     (val: any) => {
  //       console.log(val);
  //     },
  //     (error: any) => {
  //       alert(error.message);
  //     }
  //     // () => {
  //     //   alert('Obervable is complete emtting all value!');
  //     // }
  //   );
  // }

  counterSub: any;
  counterObervable = interval(1000);
  ngOnInit() {
    // this.counterSub = this.counterObervable.subscribe((val) => {
    //   console.log(val);
    // });
  }
  unsubscribeIn() {
    this.counterSub.unsubscribe();
  }
  subscribeIn() {
    this.counterSub = this.counterObervable.subscribe((val) => {
      console.log(val);
    });
  }
}
