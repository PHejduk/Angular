import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Dodaj ten import

import { AppComponent } from './app.component';
import { FunctionalityListComponent } from './components/functionality-list.component';
import { TaskListComponent } from './components/task-list.component';

@NgModule({
  declarations: [AppComponent, FunctionalityListComponent, TaskListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Dodaj FormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
