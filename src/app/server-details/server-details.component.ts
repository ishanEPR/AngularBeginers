import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  serverValue="yes";


  constructor() { }

  ngOnInit(): void {
  }

}
