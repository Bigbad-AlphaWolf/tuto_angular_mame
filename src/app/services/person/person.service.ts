import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/person';

import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personEndpoints = environment.url + "/v1/person"
  constructor(private http: HttpClient) { }

  getAllPerson() {
    return this.http.get<Person[]>(this.personEndpoints);
  }

  createPerson(payload: Person): Observable<Person> {
    return this.http.post<Person>(this.personEndpoints, payload);
  }
}
