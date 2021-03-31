import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../classes/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  content: string = '../assets/contacts.json';

  getContent(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.content);
  }
}
