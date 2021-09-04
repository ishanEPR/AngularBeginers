import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email=new FormControl();
  password=new FormControl();
  name=new FormControl();


  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert(this.email.value+" "+this.name.value);
  }

}
