import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  xs=['yes','no'];
  condition=true;
  title="First component Ishan"

  constructor() { }

  ngOnInit(): void {
  }

}
