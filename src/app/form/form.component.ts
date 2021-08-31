import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


 // @ViewChild('f') formdata: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(f: NgForm){
    console.log(f.value.name)
    //this.formdata=f;

  }

}
