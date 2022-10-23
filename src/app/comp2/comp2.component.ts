import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private dataService: DataService) {}

  inputText: string = '';
  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((value) => {
      this.inputText = value;
    });
  }
}
