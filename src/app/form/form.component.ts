import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formcontrol: FormGroup;


 // @ViewChild('f') formdata: NgForm;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.formcontrol=new FormGroup({
    //   forName:new FormControl(''),
    //   forEmail:new FormControl('')
    // })
  }


  gotosecond()
  {
    this.router.navigate(['/page1']);

  }
  submitForm(f: NgForm){
    console.log(f.value.name)
    //this.formdata=f;

  }

}
