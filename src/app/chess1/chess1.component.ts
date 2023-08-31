import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess1',
  templateUrl: './chess1.component.html',
  styleUrls: ['./chess1.component.css']
})
export class Chess1Component implements OnInit {

  numbers: number[] = [8,7,6,5,4,3,2,1];
  letters:Array<any> = [
    {id: 1, text: 'A'},
    {id: 2, text: 'B'},
    {id: 3, text: 'C'},
    {id: 4, text: 'D'},
    {id: 5, text: 'E'},
    {id: 6, text: 'F'},
    {id: 7, text: 'G'},
    {id: 8, text: 'H'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
