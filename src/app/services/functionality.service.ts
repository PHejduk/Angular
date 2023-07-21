import { Injectable } from '@angular/core';
import { Functionality } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FunctionalityService {
  private functionalities: Functionality[] = [
    { id: 1, title: 'Funkcjonalność 1', description: 'Opis funkcjonalności 1' },
    { id: 2, title: 'Funkcjonalność 2', description: 'Opis funkcjonalności 2' },
  ];

  getFunctionalities(): Functionality[] {
    return this.functionalities;
  }
}
