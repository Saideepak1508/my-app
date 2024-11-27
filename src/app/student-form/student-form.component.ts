import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  public studentform: FormGroup;

  constructor() {
    this.studentform = new FormGroup({
      name: new FormControl('', Validators.required),
      class: new FormControl('', Validators.required),
      fatherName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      address: new FormGroup({
        addressline: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl(''),
      }),
      marks: new FormArray([])  // empty FormArray
    });
  }

  get marksFormArray(): FormArray {
    return this.studentform.get('marks') as FormArray;
  }

  addMarks() {
    this.marksFormArray.push(
      new FormGroup({
        marks: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    );
  }

  delete(i: number) {
    this.marksFormArray.removeAt(i);
  }

  submit() {
    console.log(this.studentform.value);
  }
}
