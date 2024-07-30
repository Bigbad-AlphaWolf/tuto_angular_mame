import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './models/person';
import { PersonService } from './services/person/person.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ListPersonsComponent } from './list-persons/list-persons.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, ListPersonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tuto_1';
  jobForm: FormGroup = new FormGroup({});
  formIsValid = true;
  isLoading = false;
  constructor(private fb: FormBuilder, private personService: PersonService){
    this.jobForm = fb.group({
      fullName: [ '', [ Validators.required ]],
      jobName: ['', [Validators.required]]
    })
  }


  onSubmit() {
    console.log("jobForm", this.jobForm);
    if(this.jobForm.valid) {
      const value: Person = this.jobForm.value;
      this.isLoading = true;
      this.personService.createPerson(value).subscribe(
        (valeur: any) => {
          this.isLoading = false;
          console.log('success:', valeur);
          
        },
        (error: HttpErrorResponse) => {
          this.isLoading = false;
          console.log('error', error);
          
        }
      )
    }
  }
}
