import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formcontrol: FormGroup;


 // @ViewChild('f') formdata: NgForm;

  constructor() { }

  ngOnInit(): void {
    // this.formcontrol=new FormGroup({
    //   forName:new FormControl(''),
    //   forEmail:new FormControl('')
    // })
  }


  submitForm(f: NgForm){
    console.log(f.value.name)
    //this.formdata=f;

  }

}
