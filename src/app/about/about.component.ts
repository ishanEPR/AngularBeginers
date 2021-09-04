import { Component, OnInit } from '@angular/core';

export interface Employee{

  id: String;
  name:String;
  email:String;
  password: String;


}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employees: Employee[]=[
    {id:'1',name:'ishan',email:'ishan@gmail.com',password:'123'},
    {id:'2',name:'is',email:'is@gmail.com',password:'123'},
    {id:'3',name:'reshmika',email:'resh@gmail.com',password:'123'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
