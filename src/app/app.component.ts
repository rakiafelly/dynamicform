import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicForm';
  personalInformations: FormGroup;
  submitted=false;
  constructor() {
    this.personalInformations = new FormGroup({
      skills: new FormArray([]),
      experienceProfessionel: new FormArray([]),
    });
  }
  get skills(): FormArray {
    return this.personalInformations.get('skills') as FormArray
  }

  addSkill() {
    this.skills.push(new FormControl('',[Validators.required]))
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i)
  }

  get experienceProfessionel(): FormArray {
    return this.personalInformations.get('experienceProfessionel') as FormArray
  }

  addExperience() {
    this.experienceProfessionel.push(new FormControl('',[Validators.required]))
  }

  deleteExperience(i: number) {
    this.experienceProfessionel.removeAt(i)
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.personalInformations.value)
    if(this.personalInformations.invalid){
      return;
    }
    console.log('form is submittes succssefuly')
  }
}


