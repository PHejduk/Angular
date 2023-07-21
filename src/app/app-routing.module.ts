import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionalityListComponent } from './components/functionality-list.component';
import { TaskListComponent } from './components/task-list.component';

const routes: Routes = [
  { path: 'functionalities', component: FunctionalityListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/functionalities', pathMatch: 'full' },
  { path: '**', redirectTo: '/functionalities', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
