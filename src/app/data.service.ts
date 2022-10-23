import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  // dataEmeter = new EventEmitter<string>();
  dataEmitter = new Subject<string>();

  raiseDataEmitterEvent(data: string) {
    // this.dataEmeter.emit(data);
    this.dataEmitter.next(data);
    // console.log(data);
  }
}
